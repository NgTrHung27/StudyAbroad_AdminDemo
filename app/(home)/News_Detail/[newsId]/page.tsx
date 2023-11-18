import React from "react";
import getNewsById from "../../../../action/get-news-by-id";
import getNews from "../../../../action/get-news";
import News_Card from "../../(routes)/_components/8_News/News_Card";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Preview } from "./preview";
import News_Card_Detail from "../../(routes)/_components/8_News/News_Card_Detail";
export const revalidate = 0;

const News_Detail = async ({ params }: { params: { newsId: string } }) => {
  const news = await getNewsById(params.newsId);
  let list_news = await getNews();
  list_news = list_news.filter((item) => item.id !== news.id);

  const formattedDate = format(new Date(news.createdAt), "do MMM, yyyy", {
    locale: vi,
  });
  return (
    <div className="w-full p-[5%] bg-white h-full">
      <div className="h-full w-full shadow-md border-gray-200/95 border-[0.09px] p-[5.5%] gap-5">
        <div className="w-full text-right h-full">{formattedDate}</div>
        <div className="w-full flex flex-col h-full">
          <div className="h-full md:text-5xl text-2xl text-red-900 font-bold mt-[8%] tracking-normal justify-center items-center text-justify">
            {news.titlenews}
          </div>
          <div className="mt-10 h-full">
            <Preview value={news.descriptions} />
          </div>
          <div className="h-full text-base md:text-3xl font-bold mt-[3%] tracking-tighter leading-[140%] items-start text-start">
            {news.author}
          </div>
          <div className="h-full text-base md:text-3xl font-medium mt-[5%] mb-[2%] tracking-tighter leading-[140%] items-start text-start">
            GỢI Ý:
          </div>
          <div className="md:gap-8 gap-4 h-full flex items-center overflow-x-auto snap-x snap-mandatory pb-[2%]">
            {list_news.map((item) => (
              <News_Card_Detail news={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News_Detail;
