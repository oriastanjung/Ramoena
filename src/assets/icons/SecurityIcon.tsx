import React, { FC } from "react";

interface SecurityIconProps {
    className? :string
}

const SecurityIcon: FC<SecurityIconProps> = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="70" rx="35" fill="#0CE449" />
      <path
        opacity="0.4"
        d="M32.6534 21.9733L26 24.4667C24.4667 25.04 23.2134 26.8533 23.2134 28.4933V38.4C23.2134 39.9733 24.2534 42.04 25.5201 42.9867L31.2534 47.2667C33.1334 48.68 36.2267 48.68 38.1067 47.2667L43.84 42.9867C45.1067 42.04 46.1467 39.9733 46.1467 38.4V28.4933C46.1467 26.8533 44.8934 25.04 43.36 24.4667L36.7067 21.9733C35.5734 21.56 33.76 21.56 32.6534 21.9733Z"
        fill="#0E100F"
      />
      <path
        d="M34.5334 34.0666C34.5601 34.0666 34.5868 34.0666 34.6134 34.0666H34.6401H34.6668C36.2001 34.0133 37.4001 32.7733 37.4135 31.2266C37.4135 29.6533 36.1335 28.3733 34.5601 28.3733C32.9868 28.3733 31.7068 29.6533 31.7068 31.2266C31.7335 32.76 32.9334 34.0133 34.5334 34.0666Z"
        fill="#0E100F"
      />
      <path
        d="M37.5868 36.88C35.9734 35.8133 33.3601 35.8133 31.7334 36.88C30.9867 37.3866 30.5468 38.1066 30.5468 38.8533C30.5468 39.6133 30.9734 40.3066 31.7334 40.8133C32.5467 41.3466 33.6001 41.6266 34.6534 41.6266C35.7067 41.6266 36.7734 41.36 37.5734 40.8133C38.3201 40.3066 38.7601 39.5866 38.7601 38.84C38.7734 38.08 38.3468 37.3866 37.5868 36.88Z"
        fill="#0E100F"
      />
    </svg>
  );
};

export default SecurityIcon;
