import React from "react";
import { useTheme } from "styled-components";

const studyIcon: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8801 8.4827L19.9932 3.59474C19.8307 3.43219 19.6378 3.30325 19.4254 3.21528C19.2131 3.12731 18.9855 3.08203 18.7557 3.08203C18.5258 3.08203 18.2982 3.12731 18.0859 3.21528C17.8735 3.30325 17.6806 3.43219 17.5181 3.59474L4.03104 17.0829C3.86783 17.2448 3.73844 17.4375 3.65037 17.6499C3.56231 17.8622 3.51734 18.09 3.51808 18.3199V23.2079C3.51808 23.672 3.70245 24.1171 4.03064 24.4453C4.35883 24.7735 4.80395 24.9579 5.26808 24.9579H10.156C10.3859 24.9586 10.6137 24.9136 10.8261 24.8256C11.0384 24.7375 11.2312 24.6081 11.3931 24.4449L24.8801 10.9579C25.0427 10.7954 25.1716 10.6024 25.2596 10.3901C25.3475 10.1777 25.3928 9.95013 25.3928 9.72028C25.3928 9.49044 25.3475 9.26284 25.2596 9.05049C25.1716 8.83815 25.0427 8.64521 24.8801 8.4827ZM5.63011 17.9579L14.8931 8.69489L16.7185 10.5204L7.45558 19.7822L5.63011 17.9579ZM5.26808 20.0699L8.40604 23.2079H5.26808V20.0699ZM10.5181 22.8458L8.69261 21.0204L17.9556 11.7574L19.781 13.5829L10.5181 22.8458ZM21.0181 12.3458L16.1301 7.45786L18.7551 4.83286L23.6431 9.71974L21.0181 12.3458Z"
        fill={theme.colors.text}
      />
    </svg>
  );
};

export default studyIcon;
