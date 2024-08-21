import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface ITodo {
  id: number;
  message: string;
}

export interface IPaginatedTodos {
  todos: ITodo[];
  hasMore: boolean;
}

export const properties = [
  {
    id: '21521551',
    date: '03-05-1997',
    href: '/detail',
    listingCategoryId: 17,
    listingType: 'buy',
    propertyType: 'Townhouse',
    description: 'bla bla bla',
    price: '260000',
    features: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 431,
      builtIn: '1988',
      hoa: true,
      airCentral: true,
      heat: false,
      smartThermo: false,
      parking: true,
      laundry: true,
      pool: false,
      deck: false,
      balcony: false,
      securityCam: true,
      gym: false,
      petFriendly: false,
      mediaRoom: false,
      communityRoom: true,
      gatedAccess: false,
      storage: false,
      outdoorSpace: false,
      kitchenAppl: false,
      fence: true,
      insWindows: false,
      fireplace: true,
      flooring: true,
      sewer: false,
      basement: true
    },
    featuredImage:
    'https://images.unsplash.com/photo-1665486018877-b191a802c2c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    galleryImgs: [
      'https://images.unsplash.com/photo-1662987551255-795f53a286ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1635831233800-abaae2910c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1662987978932-00444d4654e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
    ],
    hasVideo: false,
    videos: [],
    address: {
      title: '123 Limestone Ln, Suite #482',
      county: 'Sarasota',
      state: 'FL',
      zipCode: '22141',
      country: 'us',
      latitude: '55.2094559',
      longitude: '61.5594641',
    },
    advertiser: {
      clientAlias: 'Swan Brookers',
      clientId: 9202751408833,
      logo: {
        url: '',
      },
      phone: '954302563',
      typeId: 3,
      urlAlias: 'swan-brokers',
      reviewStart: 4.8,
      reviewCount: 28
    },
    commentCount: 70,
    viewCount: 602,
    like: false,
    isFeatured: false,
    isNew: false,
    isTop: false,
    isVirtualTour: false,
    isSold: false,
    isSchedule: false,
    saleOff: '-10% off',
    isAds: null,
  },
  {
    id: '267864751',
    date: '01-04-2022',
    href: '/detail',
    listingCategoryId: 17,
    listingType: 'buy',
    propertyType: 'Condo',
    description: 'bla bla bla',
    price: '190000',
    features: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 431,
      builtIn: '1988',
      hoa: true,
      airCentral: true,
      heat: false,
      smartThermo: false,
      parking: true,
      laundry: true,
      pool: false,
      deck: false,
      balcony: false,
      securityCam: true,
      gym: false,
      petFriendly: false,
      mediaRoom: false,
      communityRoom: true,
      gatedAccess: false,
      storage: false,
      outdoorSpace: false,
      kitchenAppl: false,
      fence: true,
      insWindows: false,
      fireplace: true,
      flooring: true,
      sewer: false,
      basement: true
    },
    featuredImage:
      'https://images.unsplash.com/photo-1663334840232-03a3c8631089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      galleryImgs: [
        'https://images.unsplash.com/photo-1665512423024-e7ecdc67840a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1663334840232-03a3c8631089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1662987260376-4658985adce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      ],
    hasVideo: false,
    videos: [],
    address: {
      title: '8242 Main St',
      county: 'Boston',
      state: 'MS',
      zipCode: '22141',
      country: 'us',
      latitude: '55.2094559',
      longitude: '61.5594641',
    },
    advertiser: {
      clientAlias: 'Swan Brookers',
      clientId: 9202751408833,
      logo: {
        url: '',
      },
      phone: '954302563',
      typeId: 3,
      urlAlias: 'swan-brokers',
      reviewStart: 4.8,
      reviewCount: 28
    },
    commentCount: 70,
    viewCount: 602,
    like: false,
    isFeatured: false,
    isNew: false,
    isTop: false,
    isVirtualTour: false,
    isSold: false,
    isSchedule: false,
    saleOff: '-10% off',
    isAds: null,
  },
  {
    id: '98685845',
    date: '03-05-1991',
    href: '/detail',
    listingCategoryId: 17,
    listingType: 'buy',
    propertyType: 'Multi',
    description: 'bla bla bla',
    price: '474000',
    features: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 431,
      builtIn: '1988',
      hoa: true,
      airCentral: true,
      heat: false,
      smartThermo: false,
      parking: true,
      laundry: true,
      pool: false,
      deck: false,
      balcony: false,
      securityCam: true,
      gym: false,
      petFriendly: false,
      mediaRoom: false,
      communityRoom: true,
      gatedAccess: false,
      storage: false,
      outdoorSpace: false,
      kitchenAppl: false,
      fence: true,
      insWindows: false,
      fireplace: true,
      flooring: true,
      sewer: false,
      basement: true
    },
    featuredImage:
      'https://images.unsplash.com/photo-1665095111931-fc4fa813e21c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      galleryImgs: [
        'https://images.unsplash.com/photo-1665074112792-a3fd50309263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1666011740605-b5df1f6fb578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1654534099214-4096f25a683b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      ],
    hasVideo: false,
    videos: [],
    address: {
      title: '8215 Clerk Av',
      county: 'New York',
      state: 'NY',
      zipCode: '22141',
      country: 'us',
      latitude: '55.2094559',
      longitude: '61.5594641',
    },
    advertiser: {
      clientAlias: 'Swan Brookers',
      clientId: 9202751408833,
      logo: {
        url: '',
      },
      phone: '954302563',
      typeId: 3,
      urlAlias: 'swan-brokers',
      reviewStart: 4.8,
      reviewCount: 28
    },
    commentCount: 70,
    viewCount: 602,
    like: false,
    isFeatured: false,
    isNew: false,
    isTop: false,
    isVirtualTour: false,
    isSold: false,
    isSchedule: false,
    saleOff: '-10% off',
    isAds: null,
  },
  {
    id: '786786889',
    date: '04-22-2006',
    href: '/detail',
    listingCategoryId: 17,
    listingType: 'buy',
    propertyType: 'Apartment',
    description: 'bla bla bla',
    price: '999000',
    features: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 431,
      builtIn: '1988',
      hoa: true,
      airCentral: true,
      heat: false,
      smartThermo: false,
      parking: true,
      laundry: true,
      pool: false,
      deck: false,
      balcony: false,
      securityCam: true,
      gym: false,
      petFriendly: false,
      mediaRoom: false,
      communityRoom: true,
      gatedAccess: false,
      storage: false,
      outdoorSpace: false,
      kitchenAppl: false,
      fence: true,
      insWindows: false,
      fireplace: true,
      flooring: true,
      sewer: false,
      basement: true
    },
    featuredImage:
      'https://images.unsplash.com/photo-1665516533754-d98825ae07e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      galleryImgs: [
        'https://images.unsplash.com/photo-1641948617776-bea2b967a706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1654534095007-5db1b4faa1a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1664651834879-b402c0bfc350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      ],
    hasVideo: false,
    videos: [],
    address: {
      title: '9351 Riscoll Ave',
      county: 'Los Angeles',
      state: 'CA',
      zipCode: '22141',
      country: 'us',
      latitude: '55.2094559',
      longitude: '61.5594641',
    },
    advertiser: {
      clientAlias: 'Swan Brookers',
      clientId: 9202751408833,
      logo: {
        url: '',
      },
      phone: '954302563',
      typeId: 3,
      urlAlias: 'swan-brokers',
      reviewStart: 4.8,
      reviewCount: 28
    },
    commentCount: 70,
    viewCount: 602,
    like: false,
    isFeatured: false,
    isNew: false,
    isTop: false,
    isVirtualTour: false,
    isSold: false,
    isSchedule: false,
    saleOff: '-10% off',
    isAds: null,
  },
];


// eslint-disable-next-line import/no-anonymous-default-export
export default (
req: NextApiRequest,
  res: NextApiResponse<IPaginatedTodos | Error>
): void => {
  const {
    query: { page },
  } = req;

  
  if (typeof page === 'string') {
    console.log(`getting page number: ${page}`);
    const returnTodos: ITodo[] = [];

    // eslint-disable-next-line radix
    const nums = parseInt(page) * 1;
    for (let i = nums; i < nums + 1; i += 1) {
      const returnTodo: ITodo = {
        id: i,
        message: `Todo number: ${i}`,
      };
      returnTodos.push(properties);
    }
    res.status(200).json({ todos: returnTodos, hasMore: page !== '4' });
  } else {
    res.status(500).json(new Error('id is not of correct type'));
  }
};

