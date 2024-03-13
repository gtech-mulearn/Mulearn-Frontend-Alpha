

type Props = {
  colors?: string;
}

export const EventsSvg = (_props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M31.2883 17.0391L29.1509 14.9016L31.2883 17.0391ZM36.9874 22.7381L35.562 21.314L36.9874 22.7381ZM42.6864 28.4385L41.2623 27.0131L42.6864 28.4385ZM49.0988 34.8496L46.9614 32.7121L49.0988 34.8496Z"
        fill={_props.colors}
      />
      <path
        d="M31.2883 17.0391L29.1509 14.9016M36.9874 22.7381L35.562 21.314M42.6864 28.4385L41.2623 27.0131M49.0988 34.8496L46.9614 32.7121M46.2476 17.7588C45.1706 16.6815 44.54 15.2372 44.4819 13.7149C44.4238 12.1926 44.9425 10.7045 45.9343 9.54817C46.0163 9.452 46.059 9.32838 46.0537 9.20209C46.0484 9.0758 45.9956 8.95617 45.9058 8.86719L40.1925 3.14742C40.0981 3.05303 39.97 3 39.8365 3C39.703 3 39.5749 3.05303 39.4805 3.14742L30.3739 12.254C30.0379 12.5899 29.7848 12.9995 29.6347 13.4502C29.4851 13.9021 29.2323 14.3128 28.8963 14.6499C28.5604 14.987 28.1505 15.2411 27.6992 15.3922C27.2481 15.5425 26.8381 15.7956 26.5016 16.1315L3.14742 39.4805C3.05303 39.5749 3 39.703 3 39.8365C3 39.97 3.05303 40.0981 3.14742 40.1925L8.86071 45.9058C8.9497 45.9956 9.06933 46.0484 9.19562 46.0537C9.32191 46.059 9.44553 46.0163 9.5417 45.9343C10.6978 44.9415 12.1862 44.4219 13.709 44.4796C15.2319 44.5374 16.6767 45.1682 17.7542 46.2458C18.8318 47.3233 19.4626 48.7681 19.5204 50.291C19.5781 51.8138 19.0585 53.3022 18.0657 54.4583C17.9836 54.5545 17.941 54.6781 17.9463 54.8044C17.9516 54.9307 18.0044 55.0503 18.0942 55.1393L23.8075 60.8526C23.9019 60.947 24.03 61 24.1635 61C24.297 61 24.4251 60.947 24.5195 60.8526L47.875 37.4984C48.2109 37.1619 48.4639 36.7519 48.6142 36.3008C48.7638 35.849 49.0166 35.4383 49.3526 35.1012C49.6886 34.7641 50.0984 34.5099 50.5497 34.3589C51.0005 34.2087 51.4101 33.9556 51.746 33.6196L60.8526 24.513C60.947 24.4186 61 24.2905 61 24.157C61 24.0235 60.947 23.8954 60.8526 23.801L55.1393 18.0877C55.0503 17.9979 54.9307 17.9451 54.8044 17.9398C54.6781 17.9345 54.5545 17.9772 54.4583 18.0592C53.3036 19.0527 51.8164 19.5737 50.2941 19.518C48.7718 19.4623 47.3267 18.834 46.2476 17.7588Z"
        stroke={_props.colors}
        stroke-width="4.14288"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
}
export const MentorsSvg = (_props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="56"
      viewBox="0 0 48 56"
      fill="none"
    >
      <path
        d="M44 56H40V50C39.9968 47.3488 38.9422 44.8071 37.0676 42.9324C35.1929 41.0578 32.6512 40.0032 30 40H18C15.3488 40.0032 12.8071 41.0578 10.9324 42.9324C9.05777 44.8071 8.00318 47.3488 8 50V56H4V50C4.00424 46.2883 5.48059 42.7298 8.10518 40.1052C10.7298 37.4806 14.2883 36.0042 18 36H30C33.7117 36.0042 37.2702 37.4806 39.8948 40.1052C42.5194 42.7298 43.9958 46.2883 44 50V56ZM2 7.99999C1.46957 7.99999 0.96086 8.2107 0.585787 8.58578C0.210714 8.96085 0 9.46955 0 9.99999V28H4V9.99999C4 9.46955 3.78929 8.96085 3.41421 8.58578C3.03914 8.2107 2.53043 7.99999 2 7.99999Z"
        fill={_props.colors}
      />
      <path
        d="M0 0V4H10V18C10 21.713 11.475 25.274 14.1005 27.8995C16.726 30.525 20.287 32 24 32C27.713 32 31.274 30.525 33.8995 27.8995C36.525 25.274 38 21.713 38 18V4H48V0H0ZM14 4H34V10H14V4ZM24 28C21.3478 28 18.8043 26.9464 16.9289 25.0711C15.0536 23.1957 14 20.6522 14 18V14H34V18C34 20.6522 32.9464 23.1957 31.0711 25.0711C29.1957 26.9464 26.6522 28 24 28Z"
        fill={_props.colors}
      />
    </svg>
  );
};

export const InternshipsSvg = (_props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="58"
      viewBox="0 0 60 58"
      fill="none"
    >
      <path
        d="M37.417 2.62456H59.5671V58H0.5V0L37.417 36.917V2.62456ZM4.1917 54.3083H49.5592L4.1917 8.94083V54.3083ZM51.1166 50.6166L54.8083 54.3083H55.8754V6.31626H41.1087V10.008H48.492V13.6997H41.1087V17.3913H48.492V21.083H41.1087V24.7747H52.1837V28.4664H41.1087V32.1581H48.492V35.8498H41.1087V39.5415H48.492V43.2332H43.7332L47.4249 46.9249H52.1837V50.6166H51.1166ZM11.5751 29.5336L28.9664 46.9249H11.5751V29.5336ZM15.2668 38.4744V43.2332H20.0256L15.2668 38.4744Z"
        fill={_props.colors}
      />
    </svg>
  );
};

export const MeetupsSvg = (_props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="57"
      viewBox="0 0 102 57"
      fill="none"
    >
      <path
        d="M29 55V50.5833C29 44.7265 31.3266 39.1095 35.4681 34.9681C39.6095 30.8266 45.2265 28.5 51.0833 28.5M51.0833 28.5C56.9402 28.5 62.5572 30.8266 66.6986 34.9681C70.84 39.1095 73.1667 44.7265 73.1667 50.5833V55M51.0833 28.5C54.5975 28.5 57.9676 27.104 60.4525 24.6192C62.9374 22.1343 64.3333 18.7641 64.3333 15.25C64.3333 11.7359 62.9374 8.36569 60.4525 5.88084C57.9676 3.39598 54.5975 2 51.0833 2C47.5692 2 44.199 3.39598 41.7142 5.88084C39.2293 8.36569 37.8333 11.7359 37.8333 15.25C37.8333 18.7641 39.2293 22.1343 41.7142 24.6192C44.199 27.104 47.5692 28.5 51.0833 28.5ZM2.5 55V50.5833C2.5 47.0692 3.89598 43.699 6.38084 41.2142C8.86569 38.7293 12.2359 37.3333 15.75 37.3333M15.75 37.3333C18.0927 37.3333 20.3395 36.4027 21.9961 34.7461C23.6527 33.0895 24.5833 30.8427 24.5833 28.5C24.5833 26.1573 23.6527 23.9105 21.9961 22.2539C20.3395 20.5973 18.0927 19.6667 15.75 19.6667C13.4073 19.6667 11.1605 20.5973 9.50389 22.2539C7.84732 23.9105 6.91667 26.1573 6.91667 28.5C6.91667 30.8427 7.84732 33.0895 9.50389 34.7461C11.1605 36.4027 13.4073 37.3333 15.75 37.3333ZM99.6667 55V50.5833C99.6667 47.0692 98.2707 43.699 95.7858 41.2142C93.301 38.7293 89.9308 37.3333 86.4167 37.3333M86.4167 37.3333C88.7594 37.3333 91.0062 36.4027 92.6628 34.7461C94.3194 33.0895 95.25 30.8427 95.25 28.5C95.25 26.1573 94.3194 23.9105 92.6628 22.2539C91.0062 20.5973 88.7594 19.6667 86.4167 19.6667C84.0739 19.6667 81.8271 20.5973 80.1706 22.2539C78.514 23.9105 77.5833 26.1573 77.5833 28.5C77.5833 30.8427 78.514 33.0895 80.1706 34.7461C81.8271 36.4027 84.0739 37.3333 86.4167 37.3333Z"
        stroke={_props.colors}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};