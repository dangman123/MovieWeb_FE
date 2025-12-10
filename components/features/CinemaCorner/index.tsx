"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ArticleCard from "./ArticleCard";
import TabNavigation from "./TabNavigation";
import {
  CINEMA_CORNER_TABS,
  CinemaCornerTab,
  MOCK_CINEMA_REVIEWS,
  MOCK_CINEMA_BLOG,
} from "./constants";
import { CinemaArticle } from "@/types/cinema-corner";

interface CinemaCornerProps {
  reviews?: CinemaArticle[];
  blog?: CinemaArticle[];
}

export default function CinemaCorner({
  reviews = MOCK_CINEMA_REVIEWS,
  blog = MOCK_CINEMA_BLOG,
}: CinemaCornerProps) {
  const [activeTab, setActiveTab] = useState<CinemaCornerTab>("reviews");

  // Lấy bài viết nổi bật (featured) và các bài khác
  const getFeaturedAndOthers = (articles: CinemaArticle[]) => {
    const featured = articles.find((a) => a.featured);
    const others = articles.filter((a) => !a.featured);
    return { featured, others };
  };

  const reviewsData = getFeaturedAndOthers(reviews);
  const blogData = getFeaturedAndOthers(blog);

  const currentData = activeTab === "reviews" ? reviewsData : blogData;

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center transition-all duration-300">
          {/* Tabs Navigation */}
          <div className="flex items-center w-full justify-between mb-10">
            <TabNavigation
              tabs={CINEMA_CORNER_TABS}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Content Area */}
          <div className="mt-8">
            <div className="grid md:grid-cols-2 md:gap-x-6 gap-4">
              {/* Featured Article */}
              {currentData.featured && (
                <ArticleCard
                  article={currentData.featured}
                  variant="featured"
                />
              )}

              {/* Other Articles */}
              <article className="flex flex-col gap-y-4">
                {currentData.others.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="compact"
                  />
                ))}
              </article>
            </div>

            {/* See More Button */}
            <div className="text-center mt-7 transition-all duration-300 ease-in-out">
              <Link
                href={activeTab === "reviews" ? "/binh-luan-phim/" : "/blog/"}
                className="text-orange-500 hover:text-white w-40 border border-orange-500 hover:bg-orange-500 transition-all duration-300 focus:ring-1 focus:outline-none focus:ring-orange-500 rounded text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2"
              >
                Xem thêm
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
