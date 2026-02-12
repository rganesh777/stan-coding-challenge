import { useEffect, useState } from "react";
import type { MediaFeed, MediaItem } from "../types/media";

type FeedInfo = { data: MediaItem[]; loading: boolean; error: string | null };

let cache: MediaItem[] | null = null;

export function useMediaFeed() {
  const [feedInfo, setFeedInfo] = useState<FeedInfo>({
    data: cache ?? [],
    loading: !cache,
    error: null,
  });

  useEffect(() => {
    if (cache) return;
    const ac = new AbortController();

    fetch("/feed/sample.json", { signal: ac.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json: MediaFeed) => {
        cache = Array.isArray(json.entries) ? json.entries : [];
        setFeedInfo({ data: cache, loading: false, error: null });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setFeedInfo({
          data: [],
          loading: false,
          error: "Oops, Something went wrong...",
        });
      });

    return () => ac.abort();
  }, []);

  return {
    ...feedInfo,
    refetch: () => {
      cache = null;
      setFeedInfo({ data: [], loading: true, error: null });
    },
  };
}

export function clearMediaCache() {
  cache = null;
}
