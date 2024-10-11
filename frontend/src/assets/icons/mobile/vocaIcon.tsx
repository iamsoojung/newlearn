import React from "react";
import { useTheme } from "styled-components";

const vocaIcon:React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme()
  return <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_919_867)">
  <path d="M16.2681 3.70801C16.2681 3.49252 16.1825 3.28586 16.0301 3.13348C15.8777 2.98111 15.6711 2.89551 15.4556 2.89551C15.2401 2.89551 15.0334 2.98111 14.881 3.13348C14.7287 3.28586 14.6431 3.49252 14.6431 3.70801V19.1455C14.6431 19.361 14.7287 19.5677 14.881 19.72C15.0334 19.8724 15.2401 19.958 15.4556 19.958C15.6711 19.958 15.8777 19.8724 16.0301 19.72C16.1825 19.5677 16.2681 19.361 16.2681 19.1455V18.983C16.9473 19.5956 17.7907 19.958 18.7056 19.958C20.9497 19.958 22.7681 17.7756 22.7681 15.083C22.7681 12.3904 20.9497 10.208 18.7056 10.208C17.7907 10.208 16.9473 10.5704 16.2681 11.183V3.70801ZM21.1431 15.083C21.1431 17.1679 19.7862 18.333 18.7056 18.333C17.6249 18.333 16.2681 17.1679 16.2681 15.083C16.2681 12.9981 17.6249 11.833 18.7056 11.833C19.7862 11.833 21.1431 12.9981 21.1431 15.083ZM11.3931 13.1883L11.3882 12.9656C11.3004 10.9961 10.0362 9.77576 7.91232 9.67013L7.60194 9.65876C6.37832 9.63601 5.40819 9.85701 4.69482 10.3575C4.51855 10.4812 4.39863 10.6698 4.36145 10.8819C4.32427 11.0941 4.37288 11.3122 4.49657 11.4885C4.62026 11.6648 4.8089 11.7847 5.02101 11.8219C5.23311 11.859 5.4513 11.8104 5.62757 11.6868C6.05657 11.3861 6.78944 11.2399 7.83107 11.2919C9.16357 11.3585 9.75507 11.9516 9.76644 13.1509C8.765 12.8793 7.72081 12.8021 6.69032 12.9234C4.55507 13.1818 3.26807 14.5695 3.26807 16.4383C3.26807 18.5573 4.79719 19.9596 6.78944 19.9596C7.70757 19.9596 8.69719 19.646 9.76807 19.0334V19.1471L9.77619 19.2576C9.80288 19.4521 9.89904 19.6302 10.0469 19.7593C10.1948 19.8883 10.3843 19.9595 10.5806 19.9596L10.6911 19.9515C10.8833 19.9251 11.0597 19.8309 11.1885 19.6857C11.3173 19.5406 11.3898 19.3541 11.3931 19.1601V13.1883ZM6.88532 14.576C7.74165 14.4753 8.60945 14.546 9.43819 14.784V14.7856L9.76644 14.8831V17.1468L9.49832 17.3304C8.43232 18.0324 7.52557 18.3736 6.78782 18.3736C5.66332 18.3736 4.89144 17.6651 4.89144 16.4773C4.89144 15.4486 5.54957 14.7385 6.88532 14.576ZM26.0181 22.3955V21.583C26.0181 21.3675 25.9325 21.1609 25.7801 21.0085C25.6277 20.8561 25.4211 20.7705 25.2056 20.7705C24.9901 20.7705 24.7834 20.8561 24.631 21.0085C24.4787 21.1609 24.3931 21.3675 24.3931 21.583V22.3955C24.3931 22.611 24.3075 22.8177 24.1551 22.97C24.0027 23.1224 23.7961 23.208 23.5806 23.208H2.45557C2.24008 23.208 2.03342 23.1224 1.88104 22.97C1.72867 22.8177 1.64307 22.611 1.64307 22.3955V21.583C1.64307 21.3675 1.55746 21.1609 1.40509 21.0085C1.25272 20.8561 1.04605 20.7705 0.830566 20.7705C0.615078 20.7705 0.408415 20.8561 0.256042 21.0085C0.103669 21.1609 0.0180664 21.3675 0.0180664 21.583L0.0180664 22.3955C0.0180664 23.042 0.274874 23.662 0.731994 24.1191C1.18911 24.5762 1.8091 24.833 2.45557 24.833H23.5806C23.9008 24.8336 24.2181 24.771 24.5141 24.6488C24.8101 24.5265 25.0791 24.347 25.3056 24.1205C25.532 23.894 25.7116 23.6251 25.8338 23.3291C25.9561 23.033 26.0187 22.7158 26.0181 22.3955Z" fill={theme.colors.text}/>
  </g>
  <defs>
  <clipPath id="clip0_919_867">
  <rect width="26" height="26" fill={theme.colors.text} transform="translate(0.0180664 0.458008)"/>
  </clipPath>
  </defs>
  </svg>
  ;
};

export default vocaIcon;
