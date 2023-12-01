import { TypesNewsArray } from "@/app/types";

export const news = [
  {
    id: "1",
    title: "ニュース1",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
  },
  {
    id: "2",
    title: "ニュース2",
    image: "section2",
    description: `テキストテキストテキストテキストテキストテキストテキストテキスト`
  },
  {
    id: "3",
    title: "ニュース3",
    image: "section2",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
  },
  {
    id: "4",
    title: "ニュース4",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
  },
  {
    id: "5",
    title: "ニュース5",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
  },
  {
    id: "6",
    title: "ニュース6",
    image: "section2",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
  },
]

export const newsArray: TypesNewsArray[] = [
  {
    id: "1",
    title: "ニュース1",
    details: [
      {
        image: "section2",
        description: `テキストテキストテキスト`
      },
      {
        description: `テキストテキストテキストテキストテキストテキスト`
      },
      {
        image: "section2",
        description: `テキストテキストテキスト`
      },
    ],
  },
  {
    id: "2",
    title: "ニュース2",
    details: [
      {
        description: `テキストテキストテキスト`
      },
      {
        description: `テキストテキストテキストテキストテキストテキスト`
      },
      {
        image: "section2",
        description: `テキストテキストテキスト`
      },
    ],
  },
  {
    id: "3",
    title: "ニュース3",
    details: [
      {
        description: `テキストテキストテキスト`
      },
      {
        description: `テキストテキストテキストテキストテキストテキスト`
      },
      {
        image: "section2",
        description: `テキストテキストテキスト`
      },
    ],
  },
  {
    id: "4",
    title: "ニュース4",
    details: [
      {
        // image: "section2",
        description: `テキストテキストテキスト`
      },
      {
        description: `テキストテキストテキストテキストテキストテキスト`
      },
      {
        image: "character6",
        description: `テキストテキストテキスト`
      },
    ],
  },
  {
    id: "5",
    title: "ニュース5",
    details: [
      {
        // image: "section2",
        description: `テキストテキストテキスト`
      },
      {
        description: `テキストテキストテキストテキストテキストテキスト`
      },
      {
        // image: "section2",
        description: `テキストテキストテキスト`
      },
    ],
  },
  {
    id: "6",
    title: "ニュース6",
    details: [
      {
        description: `テキストテキストテキスト`
      },
      {
        description: `テキストテキストテキストテキストテキストテキスト`
      },
      {
        image: "section2",
        description: `テキストテキストテキスト`
      },
    ],
  },
]