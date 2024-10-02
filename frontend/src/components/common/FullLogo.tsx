const FullLogo: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 421 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.2014 41.8558C66.8004 41.7154 66.3635 41.7154 65.9625 41.8558C61.4982 43.4183 61.4982 49.7318 65.9625 51.2943L87.8492 58.9547C88.9185 59.329 90.0833 59.329 91.1527 58.9547L113.039 51.2943C117.504 49.7318 117.504 43.4183 113.039 41.8558C112.638 41.7154 112.201 41.7154 111.8 41.8558L91.1527 49.0825C90.0833 49.4568 88.9185 49.4568 87.8492 49.0825L67.2014 41.8558Z"
          fill="#8DBBF7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.2014 56.0477C66.8004 55.9073 66.3635 55.9073 65.9625 56.0477C61.4982 57.6102 61.4982 63.9237 65.9625 65.4862L87.8492 73.1466C88.9185 73.5208 90.0833 73.5208 91.1527 73.1466L113.039 65.4862C117.504 63.9237 117.504 57.6102 113.039 56.0477C112.638 55.9073 112.201 55.9073 111.8 56.0477L91.1527 63.2744C90.0833 63.6487 88.9185 63.6487 87.8492 63.2744L67.2014 56.0477Z"
          fill="#0268ED"
        />
        <path
          d="M63.1801 29.9188L88.217 21.435C89.0496 21.1529 89.9519 21.1529 90.7844 21.435L115.821 29.9188C119.443 31.146 119.443 36.2684 115.821 37.4956L90.7844 45.9795C89.9519 46.2616 89.0496 46.2616 88.217 45.9795L63.1801 37.4956C59.5584 36.2684 59.5584 31.146 63.1801 29.9188Z"
          fill="#0268ED"
        />
        <path
          d="M167.387 64H160.192L147.231 41.875V64H140.504V30.3906H147.7L160.661 52.5391V30.3906H167.387V64ZM179.695 57.8594C179.945 57.9375 180.195 57.9922 180.445 58.0234C180.695 58.0391 180.945 58.0469 181.195 58.0469C181.82 58.0469 182.421 57.9609 182.999 57.7891C183.578 57.6172 184.117 57.375 184.617 57.0625C185.132 56.7344 185.585 56.3438 185.976 55.8906C186.382 55.4219 186.71 54.9062 186.96 54.3438L191.648 59.0547C191.054 59.8984 190.367 60.6562 189.585 61.3281C188.82 62 187.984 62.5703 187.078 63.0391C186.187 63.5078 185.242 63.8594 184.242 64.0938C183.257 64.3438 182.242 64.4688 181.195 64.4688C179.429 64.4688 177.765 64.1406 176.203 63.4844C174.656 62.8281 173.296 61.9141 172.124 60.7422C170.968 59.5703 170.054 58.1797 169.382 56.5703C168.71 54.9453 168.374 53.1641 168.374 51.2266C168.374 49.2422 168.71 47.4297 169.382 45.7891C170.054 44.1484 170.968 42.75 172.124 41.5938C173.296 40.4375 174.656 39.5391 176.203 38.8984C177.765 38.2578 179.429 37.9375 181.195 37.9375C182.242 37.9375 183.265 38.0625 184.265 38.3125C185.265 38.5625 186.21 38.9219 187.101 39.3906C188.007 39.8594 188.851 40.4375 189.632 41.125C190.413 41.7969 191.101 42.5547 191.695 43.3984L179.695 57.8594ZM182.976 44.6641C182.679 44.5547 182.382 44.4844 182.085 44.4531C181.804 44.4219 181.507 44.4062 181.195 44.4062C180.32 44.4062 179.492 44.5703 178.71 44.8984C177.945 45.2109 177.273 45.6641 176.695 46.2578C176.132 46.8516 175.687 47.5703 175.359 48.4141C175.031 49.2422 174.867 50.1797 174.867 51.2266C174.867 51.4609 174.874 51.7266 174.89 52.0234C174.921 52.3203 174.96 52.625 175.007 52.9375C175.07 53.2344 175.14 53.5234 175.218 53.8047C175.296 54.0859 175.398 54.3359 175.523 54.5547L182.976 44.6641ZM223.737 54.9297C223.737 56.2422 223.487 57.4844 222.987 58.6562C222.487 59.8125 221.799 60.8203 220.924 61.6797C220.065 62.5391 219.049 63.2188 217.877 63.7188C216.721 64.2188 215.479 64.4688 214.151 64.4688C212.963 64.4688 211.823 64.2656 210.729 63.8594C209.635 63.4375 208.643 62.8281 207.752 62.0312C206.877 62.8281 205.893 63.4375 204.799 63.8594C203.721 64.2656 202.58 64.4688 201.377 64.4688C200.049 64.4688 198.807 64.2188 197.651 63.7188C196.494 63.2188 195.479 62.5391 194.604 61.6797C193.744 60.8203 193.065 59.8125 192.565 58.6562C192.065 57.4844 191.815 56.2422 191.815 54.9297V38.9453H198.213V54.9297C198.213 55.3672 198.291 55.7812 198.448 56.1719C198.619 56.5469 198.846 56.8828 199.127 57.1797C199.424 57.4609 199.76 57.6875 200.135 57.8594C200.526 58.0156 200.94 58.0938 201.377 58.0938C201.815 58.0938 202.229 58.0156 202.619 57.8594C203.01 57.6875 203.354 57.4609 203.651 57.1797C203.948 56.8828 204.174 56.5469 204.33 56.1719C204.502 55.7812 204.588 55.3672 204.588 54.9297V38.9453H210.963V54.9297C210.963 55.3672 211.049 55.7812 211.221 56.1719C211.393 56.5469 211.619 56.8828 211.901 57.1797C212.198 57.4609 212.533 57.6875 212.908 57.8594C213.299 58.0156 213.713 58.0938 214.151 58.0938C214.588 58.0938 215.002 58.0156 215.393 57.8594C215.783 57.6875 216.119 57.4609 216.401 57.1797C216.698 56.8828 216.932 56.5469 217.104 56.1719C217.276 55.7812 217.362 55.3672 217.362 54.9297V38.9453H223.737V54.9297ZM260.281 64H236.75V30.3906H243.477V57.2734H260.281V64ZM269.565 57.8594C269.815 57.9375 270.065 57.9922 270.315 58.0234C270.565 58.0391 270.815 58.0469 271.065 58.0469C271.69 58.0469 272.292 57.9609 272.87 57.7891C273.448 57.6172 273.987 57.375 274.487 57.0625C275.003 56.7344 275.456 56.3438 275.847 55.8906C276.253 55.4219 276.581 54.9062 276.831 54.3438L281.518 59.0547C280.925 59.8984 280.237 60.6562 279.456 61.3281C278.69 62 277.854 62.5703 276.948 63.0391C276.057 63.5078 275.112 63.8594 274.112 64.0938C273.128 64.3438 272.112 64.4688 271.065 64.4688C269.3 64.4688 267.636 64.1406 266.073 63.4844C264.526 62.8281 263.167 61.9141 261.995 60.7422C260.839 59.5703 259.925 58.1797 259.253 56.5703C258.581 54.9453 258.245 53.1641 258.245 51.2266C258.245 49.2422 258.581 47.4297 259.253 45.7891C259.925 44.1484 260.839 42.75 261.995 41.5938C263.167 40.4375 264.526 39.5391 266.073 38.8984C267.636 38.2578 269.3 37.9375 271.065 37.9375C272.112 37.9375 273.136 38.0625 274.136 38.3125C275.136 38.5625 276.081 38.9219 276.972 39.3906C277.878 39.8594 278.722 40.4375 279.503 41.125C280.284 41.7969 280.972 42.5547 281.565 43.3984L269.565 57.8594ZM272.847 44.6641C272.55 44.5547 272.253 44.4844 271.956 44.4531C271.675 44.4219 271.378 44.4062 271.065 44.4062C270.19 44.4062 269.362 44.5703 268.581 44.8984C267.815 45.2109 267.143 45.6641 266.565 46.2578C266.003 46.8516 265.557 47.5703 265.229 48.4141C264.901 49.2422 264.737 50.1797 264.737 51.2266C264.737 51.4609 264.745 51.7266 264.761 52.0234C264.792 52.3203 264.831 52.625 264.878 52.9375C264.94 53.2344 265.011 53.5234 265.089 53.8047C265.167 54.0859 265.268 54.3359 265.393 54.5547L272.847 44.6641ZM306.037 64H304.49L302.006 60.5547C301.396 61.1016 300.748 61.6172 300.06 62.1016C299.388 62.5703 298.678 62.9844 297.928 63.3438C297.178 63.6875 296.404 63.9609 295.607 64.1641C294.826 64.3672 294.029 64.4688 293.217 64.4688C291.451 64.4688 289.787 64.1719 288.224 63.5781C286.678 62.9844 285.318 62.125 284.146 61C282.99 59.8594 282.076 58.4688 281.404 56.8281C280.732 55.1875 280.396 53.3203 280.396 51.2266C280.396 49.2734 280.732 47.4844 281.404 45.8594C282.076 44.2188 282.99 42.8125 284.146 41.6406C285.318 40.4688 286.678 39.5625 288.224 38.9219C289.787 38.2656 291.451 37.9375 293.217 37.9375C294.029 37.9375 294.834 38.0391 295.631 38.2422C296.428 38.4453 297.201 38.7266 297.951 39.0859C298.701 39.4453 299.412 39.8672 300.084 40.3516C300.771 40.8359 301.412 41.3594 302.006 41.9219L304.49 38.9453H306.037V64ZM299.592 51.2266C299.592 50.3516 299.42 49.5078 299.076 48.6953C298.748 47.8672 298.295 47.1406 297.717 46.5156C297.138 45.875 296.459 45.3672 295.678 44.9922C294.912 44.6016 294.092 44.4062 293.217 44.4062C292.342 44.4062 291.513 44.5547 290.732 44.8516C289.967 45.1484 289.295 45.5859 288.717 46.1641C288.154 46.7422 287.709 47.4609 287.381 48.3203C287.053 49.1641 286.888 50.1328 286.888 51.2266C286.888 52.3203 287.053 53.2969 287.381 54.1562C287.709 55 288.154 55.7109 288.717 56.2891C289.295 56.8672 289.967 57.3047 290.732 57.6016C291.513 57.8984 292.342 58.0469 293.217 58.0469C294.092 58.0469 294.912 57.8594 295.678 57.4844C296.459 57.0938 297.138 56.5859 297.717 55.9609C298.295 55.3203 298.748 54.5938 299.076 53.7812C299.42 52.9531 299.592 52.1016 299.592 51.2266ZM314.454 64H308.055V38.8984H309.602L311.712 41.875C312.743 40.9375 313.915 40.2188 315.227 39.7188C316.54 39.2031 317.899 38.9453 319.305 38.9453H324.954V45.3203H319.305C318.633 45.3203 318.001 45.4453 317.407 45.6953C316.813 45.9453 316.298 46.2891 315.86 46.7266C315.423 47.1641 315.079 47.6797 314.829 48.2734C314.579 48.8672 314.454 49.5 314.454 50.1719V64ZM331.449 64H325.05V38.8984H326.597L328.707 41.3359C329.738 40.3984 330.902 39.6797 332.199 39.1797C333.511 38.6641 334.878 38.4062 336.3 38.4062C337.832 38.4062 339.277 38.7031 340.636 39.2969C341.996 39.875 343.183 40.6797 344.199 41.7109C345.214 42.7266 346.011 43.9219 346.589 45.2969C347.183 46.6562 347.48 48.1094 347.48 49.6562V64H341.082V49.6562C341.082 49 340.957 48.3828 340.707 47.8047C340.457 47.2109 340.113 46.6953 339.675 46.2578C339.238 45.8203 338.73 45.4766 338.152 45.2266C337.574 44.9766 336.957 44.8516 336.3 44.8516C335.628 44.8516 334.996 44.9766 334.402 45.2266C333.808 45.4766 333.292 45.8203 332.855 46.2578C332.417 46.6953 332.074 47.2109 331.824 47.8047C331.574 48.3828 331.449 49 331.449 49.6562V64Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default FullLogo;