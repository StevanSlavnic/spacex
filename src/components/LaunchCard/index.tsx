import { useState } from "react";

import HeartIcon from "../Icons/HeartIcon";
import Button from "../Button";

import { formatDate } from "../../utils/utcDateConverter";
import { handleLaunchInLocalStorage } from "../../utils/favouriteLaunches";

import { Launch } from "../../types";

export default function LaunchCard({ launch }: { launch: Launch }) {
  const { name, date_utc, success, links, favorited } = launch;
  const [isFavourite, setIsFavourite] = useState(favorited);

  return (
    <article className="flex relative flex-col justify-between border rounded-lg p-4 shadow-lg h-full">
      <div className="flex-grow">
        <img
          src={links.patch.small || links.patch.large || ""}
          alt={name}
          className="w-full mb-4"
          height="200"
          width="200"
          loading="lazy"
          srcSet={`${links.patch.small} 250w, ${links.patch.large} 500w`}
          sizes="(min-width: 768px) 10vw, (max-width: 767px) 70vw, 10vw"
        />
      </div>
      <div>
        <h2 className="text-sm font-bold">{name}</h2>
        <p className="text-sm text-gray-600">
          Launch date: {formatDate(date_utc)}
        </p>
        <p className="text-sm text-gray-600">
          Status:{" "}
          {success ? (
            <span className="text-green-500">Success</span>
          ) : (
            <span className="text-red-500">Failure</span>
          )}
        </p>
      </div>
      <Button
        type="button"
        role="button"
        aria-label="Favourtite launch"
        className="absolute bottom-4 right-3"
        onClick={() => {
          setIsFavourite(!isFavourite);
          handleLaunchInLocalStorage(launch);
        }}
      >
        {isFavourite ? (
          <HeartIcon fill="#ef4444" stroke="#ef4444" />
        ) : (
          <HeartIcon fill="white" stroke="#ef4444" />
        )}
      </Button>
    </article>
  );
}
