import React from "react";
import styled from "styled-components";

type Props = {
  startUserRecording: () => void;
  stopUserRecording: () => void;
  mediaBlobUrl?: string;
  status: string;
};

const SpeakingTestRecord: React.FC<Props> = ({
  startUserRecording,
  stopUserRecording,
  mediaBlobUrl,
  status,
}) => {
  return (
    <>
      {/* 녹음 버튼 및 상태 표시 */}
      {status === "recording" ? (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52.4997 68.5835C57.0005 67.978 61.1285 65.7596 64.1171 62.3403C67.1058 58.9209 68.7519 54.5332 68.7497 49.9918V43.7502H63.7497V49.9918C63.7497 53.6386 62.301 57.1359 59.7224 59.7146C57.1438 62.2932 53.6464 63.7418 49.9997 63.7418C46.3529 63.7418 42.8556 62.2932 40.277 59.7146C37.6983 57.1359 36.2497 53.6386 36.2497 49.9918V43.7502H31.2497V49.9918C31.2475 54.5332 32.8936 58.9209 35.8822 62.3403C38.8708 65.7596 42.9989 67.978 47.4997 68.5835V75.0002H52.4997V68.5835ZM49.9997 91.6668C26.9872 91.6668 8.33301 73.0127 8.33301 50.0002C8.33301 26.9877 26.9872 8.3335 49.9997 8.3335C73.0122 8.3335 91.6663 26.9877 91.6663 50.0002C91.6663 73.0127 73.0122 91.6668 49.9997 91.6668ZM49.9997 27.0835C47.7895 27.0835 45.6699 27.9615 44.1071 29.5243C42.5443 31.0871 41.6663 33.2067 41.6663 35.4168V50.0002C41.6663 52.2103 42.5443 54.3299 44.1071 55.8927C45.6699 57.4555 47.7895 58.3335 49.9997 58.3335C52.2098 58.3335 54.3294 57.4555 55.8922 55.8927C57.455 54.3299 58.333 52.2103 58.333 50.0002V35.4168C58.333 33.2067 57.455 31.0871 55.8922 29.5243C54.3294 27.9615 52.2098 27.0835 49.9997 27.0835Z"
            fill="#0268ED"
          />
        </svg>
      ) : (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={startUserRecording}
          style={{ cursor: "pointer" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.9997 86.6668C59.7243 86.6668 69.0506 82.8038 75.9269 75.9274C82.8033 69.0511 86.6663 59.7248 86.6663 50.0002C86.6663 40.2756 82.8033 30.9492 75.9269 24.0729C69.0506 17.1966 59.7243 13.3335 49.9997 13.3335C40.2751 13.3335 30.9488 17.1966 24.0724 24.0729C17.1961 30.9492 13.333 40.2756 13.333 50.0002C13.333 59.7248 17.1961 69.0511 24.0724 75.9274C30.9488 82.8038 40.2751 86.6668 49.9997 86.6668ZM49.9997 91.6668C26.9872 91.6668 8.33301 73.0127 8.33301 50.0002C8.33301 26.9877 26.9872 8.3335 49.9997 8.3335C73.0122 8.3335 91.6663 26.9877 91.6663 50.0002C91.6663 73.0127 73.0122 91.6668 49.9997 91.6668ZM49.9997 32.0835C49.2884 32.0835 48.584 32.2236 47.9268 32.4958C47.2696 32.768 46.6725 33.167 46.1695 33.67C45.6665 34.173 45.2675 34.7701 44.9953 35.4273C44.7231 36.0845 44.583 36.7888 44.583 37.5002V52.0835C44.583 52.7948 44.7231 53.4992 44.9953 54.1564C45.2675 54.8135 45.6665 55.4107 46.1695 55.9137C46.6725 56.4166 47.2696 56.8156 47.9268 57.0878C48.584 57.3601 49.2884 57.5002 49.9997 57.5002C50.711 57.5002 51.4154 57.3601 52.0725 57.0878C52.7297 56.8156 53.3269 56.4166 53.8298 55.9137C54.3328 55.4107 54.7318 54.8135 55.004 54.1564C55.2762 53.4992 55.4163 52.7948 55.4163 52.0835V37.5002C55.4163 36.0636 54.8457 34.6858 53.8298 33.67C52.814 32.6542 51.4363 32.0835 49.9997 32.0835ZM52.4997 70.6668V77.0835H47.4997V70.6668C42.9989 70.0613 38.8708 67.8429 35.8822 64.4236C32.8936 61.0043 31.2475 56.6165 31.2497 52.0752V45.8335H36.2497V52.0752C36.2497 53.8808 36.6053 55.6688 37.2963 57.3371C37.9873 59.0053 39.0002 60.5211 40.277 61.7979C41.5538 63.0747 43.0696 64.0875 44.7378 64.7785C46.406 65.4695 48.194 65.8252 49.9997 65.8252C51.8054 65.8252 53.5933 65.4695 55.2616 64.7785C56.9298 64.0875 58.4456 63.0747 59.7224 61.7979C60.9992 60.5211 62.012 59.0053 62.703 57.3371C63.394 55.6688 63.7497 53.8808 63.7497 52.0752V45.8335H68.7497V52.0752C68.7519 56.6165 67.1058 61.0043 64.1172 64.4236C61.1285 67.8429 57.0005 70.0613 52.4997 70.6668ZM49.9997 27.0835C52.7623 27.0835 55.4119 28.181 57.3654 30.1345C59.3189 32.088 60.4163 34.7375 60.4163 37.5002V52.0835C60.4163 54.8462 59.3189 57.4957 57.3654 59.4492C55.4119 61.4027 52.7623 62.5002 49.9997 62.5002C47.237 62.5002 44.5875 61.4027 42.634 59.4492C40.6805 57.4957 39.583 54.8462 39.583 52.0835V37.5002C39.583 34.7375 40.6805 32.088 42.634 30.1345C44.5875 28.181 47.237 27.0835 49.9997 27.0835Z"
            fill="#0268ED"
          />
        </svg>
      )}
      <br />
      <p>마이크 버튼을 눌러 녹음을 시작하세요.</p>
      {/* 녹음 중일 때 시각적 효과 (ex: 녹음 중 애니메이션) */}
      {status === "recording" && (
        <>
          <div style={{ color: "red", fontWeight: "bold" }}>녹음중입니다.</div>
          <StopButton></StopButton>
          <button onClick={stopUserRecording} disabled={status !== "recording"}>
            Stop Recording
          </button>
        </>
      )}
      {/* 녹음된 오디오 파일 재생 */}
      {mediaBlobUrl && (
        <div>
          <h3>녹음한 오디오 듣기</h3>
          <audio controls src={mediaBlobUrl}></audio>
        </div>
      )}
    </>
  );
};

export default SpeakingTestRecord;

const StopButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: red;
  border-radius: 0.25rem;
`;
