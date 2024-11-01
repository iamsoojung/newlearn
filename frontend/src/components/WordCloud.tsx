import React, { useMemo } from "react";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useQuery } from "@tanstack/react-query";
import { getWordCloud } from "@services/searchService";
import { useSpring, animated, config } from "react-spring";
import { usePageTransition } from "@hooks/usePageTransition";
import { useMediaQuery } from "react-responsive";

interface WordCloudItem {
  keyword: string;
  count: number;
}

const colors = [
  "#4b6b8b",
  "#46607a",
  "#95a5a6",
  "#7f8c8d",
  "#3498db",
  "#2980b9",
  "#1abc9c",
  "#16a085",
  "#27ae60",
  "#2e70cc",
  "#0f78f1",
  "#129df3",
];

const AnimatedText = animated(Text);

const WordCloud: React.FC = () => {
  // 반응형
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });

  const responseObj = [
    {
      range: [10, 100],
      width: 1200,
      height: 600,
      fontSize: 1.2,
    },
    {
      range: [8, 90],
      width: 800,
      height: 400,
      fontSize: 1,
    },
    {
      range: [6, 80],
      width: 450,
      height: 500,
      fontSize: 0.8,
    },
  ];

  const value = isMobile ? 2 : isTablet ? 1 : 0;
  // 단어 클릭 시 검색
  const transitionTo = usePageTransition();
  const handleWordClick = (word: string) => {
    if (word) {
      const encodedWord = encodeURIComponent(word);
      transitionTo(`/news/search/${encodedWord}`);
    }
  };

  // 워드 클라우드 단어 가져오기
  const { data, isLoading, error } = useQuery<WordCloudItem[]>({
    queryKey: ["wordCloud"],
    queryFn: getWordCloud,
  });

  const words = useMemo(() => {
    return (
      data
        ?.map((item) => ({
          text: item.keyword,
          value: item.count,
        }))
        .sort((a, b) => b.value - a.value) || []
    );
  }, [data]);

  const fontScale = useMemo(
    () =>
      scaleLog({
        domain: [
          Math.min(...words.map((w) => w.value)),
          Math.max(...words.map((w) => w.value)),
        ],
        range: responseObj[value].range,
      }),
    [words]
  );

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: config.gentle,
  }));

  React.useEffect(() => {
    if (!isLoading) {
      api.start({ opacity: 1, scale: 1 });
    }
  }, [isLoading, api]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div
      style={{
        width: `${responseObj[value].width}px`,
        height: `${responseObj[value].height}px`,
      }}
    >
      <Wordcloud
        words={words}
        width={responseObj[value].width}
        height={responseObj[value].height}
        fontSize={(d) => fontScale(d.value) * responseObj[value].fontSize}
        font={"Righteous"}
        spiral={"archimedean"}
        rotate={0}
        random={() => 0.5}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <AnimatedText
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={"middle"}
              style={{
                ...springs,
                transform: springs.scale.to(
                  (s) =>
                    `translate(${w.x}px, ${w.y}px) rotate(${w.rotate}) scale(${s})`
                ),
              }}
              fontSize={w.size}
              fontFamily={w.font}
              fontWeight={500}
              cursor="pointer"
              onClick={() => handleWordClick(w.text || "")}
            >
              {w.text}
            </AnimatedText>
          ))
        }
      </Wordcloud>
    </div>
  );
};

export default WordCloud;
