import { TypesNewsMicroCMS } from '@/app/types';
import { MicroCMSQueries, createClient } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

export const client = createClient({
  serviceDomain: 'xjakqo4ln0', 
  apiKey: 'n5bImmHSj9C5NfCh5kF2lZ6AGt8PkKlQGNNH',
});

export const getNewsList = async (queries?: MicroCMSQueries): Promise<TypesNewsMicroCMS[]> => {
  const data = await client.getList<TypesNewsMicroCMS>({
    endpoint: "news",
    queries,
  }).catch(notFound);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return data.contents;
}

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<TypesNewsMicroCMS>({
    endpoint: "news",
    contentId,
    queries,
  }).catch(notFound);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return detailData;
};