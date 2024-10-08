// import './styles.css'

import { Table } from './Table'

export default function SearchTable() {
  // const columns = [
  //   { accessor: 'name', label: 'Name' },
  //   { accessor: 'age', label: 'Age' },
  //   { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
  //   { accessor: 'start_date', label: 'Start Date' },
  // ]

  const columns = [
    { accessor: 'id', label: 'ID' },
    // { accessor: 'propertyType', label: 'PropType' },
    // { accessor: 'date', label: 'date' },
    // { accessor: 'start_date', label: 'Start Date' },
  ]

  const rows = [
    { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    { id: 8, name: null, age: null, is_manager: null, start_date: null },
  ]

  const properties = [
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
        'https://images.unsplash.com/photo-1665962946503-690f7b682448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      galleryImgs: [
        'https://images.unsplash.com/photo-1665962946503-690f7b682448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
        'https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      galleryImgs: [
        'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
        'https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      galleryImgs: [
        'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
        'https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      galleryImgs: [
        'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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

  return (
    <div className="App">
      {/* <h1>Table</h1>
      <h2>Sorting, Filtering, Pagination</h2> */}

      {/* <Table rows={properties} columns={columns} /> */}
    </div>
  )
}
