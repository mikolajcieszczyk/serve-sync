import Image from "next/image";

interface LoadingSpinnerProps {
  loading: boolean;
}

export function LoadingSpinner({ loading }: LoadingSpinnerProps) {
  return (
    <>
      <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
        <div className="flex items-center">
          <div className="animate-ping">
            <Image
              src={"/img/serve_sync_logo.png"}
              alt={"ServeSync logo"}
              width={300}
              height={300}
            />
          </div>
          {/* <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            // xml:space="preserve"
            width="200px"
            height="200px"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M32,0C14.328,0,0,14.328,0,32s14.328,32,32,32s32-14.328,32-32S49.672,0,32,0z M60,30.065 c-9.249,1.524-18.161-5.099-19.685-14.348c-0.513-3.117-1.69-6.051-3.432-8.666C50.528,10.515,58.351,19.317,60,30.065z M25.366,6.893c-4.026,5.994-7.294,12.598-9.667,19.581c-1.996,5.904-5.875,10.82-11.102,13.877c-0.185-1.116-0.314-2.249-0.358-3.408 c3.562-9.492,10.598-17.613,19.981-22.945C23.253,10.756,24.2,8.77,25.366,6.893z M4,33.935c9.249-1.524,18.161,5.099,19.685,14.348 c0.513,3.117,1.69,6.051,3.432,8.666C13.472,53.485,5.649,44.683,4,33.935z M38.634,57.107c4.026-5.994,7.294-12.598,9.667-19.581 c1.996-5.904,5.875-10.82,11.102-13.877c0.185,1.116,0.314,2.249,0.358,3.408c-3.562,9.492-10.598,17.613-19.981,22.945 C40.747,53.244,39.8,55.23,38.634,57.107z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          ; */}
          {/* <svg
            className="animate-spin h-60 w-60 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="#111827"></circle>
            <path
              className="opacity-75"
              fill="#d8e516"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg> */}
        </div>
      </div>
    </>
  );
}
