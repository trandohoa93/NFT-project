export interface ProductType {
  title: string
  image?: string
  code?: number
  price: number
  volume: number
  sale?: number
  trend?: number
}

interface NftPriceDB {
  id: number
  created_at: string
  updated_at: string
  nft_id: number
  price: number | null
}

interface NftPrice {
  id: number
  createdAt: string
  updatedAt: string
  nftId: number
  price: number | null
}

interface NftDB {
  id: number
  created_at: string
  updated_at: string
  user_id: number
  collection_id: number | null
  title: string
  starting_date: date | null
  expiration_date: date | null
  description: string
  img_url: File | null
  current_price: number | null
  nft_prices: NftPriceDB[]
}

export interface Nft {
  id: number
  createdAt: string
  updatedAt: string
  userId: number
  collectionId: number | null
  title: string
  startingDate: date | null
  expirationDate: date | null
  description: string
  imgUrl: File | string
  currentPrice: number | null
  nftPrices: NftPrice[]
}

export interface CardProductProp {
  labelPrice: string
  heightImg?: number
  showHeartIcon?: boolean
  showBg?: boolean
  product: NftDB
}

export interface CardUserProp {
  id: number
  image: string
  name: string
  followers: string
  isFollow: string
  isLoading: boolean
}

export interface SliderArticleProp {
  imageUrl: string
  title: string
  date: string
}

export interface SliderBannerProp {
  cover_img_url: string
  name: string
  price: number
  price: number
  id: string
}

export interface Notification {
  id: number
  title: string
  name: string
  price: number
  is_seen: boolean
}

export interface Page {
  id: number
  link: string
  name: string
  image: string
}

export interface HeaderNavBar {
  id: number
  link: string
  name: string
  image: string
  isHidden: boolean
  screenSize: string
}

export interface LoginForm {
  email?: string | null
  password?: string | null
  rememberMe: boolean
}

export interface RegisterForm {
  email?: string | null
  password?: string | null
  confirmPassword?: string | null
}

export interface SearchProp {
  label?: string
}

export enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export interface ProfileForm {
  name: string
  gender: string
  email: string
  phoneNumber: string
  url: string
  address: string
  country: string
  state: string
  city: string
  zipCode: string
}

export interface ChangePasswordForm {
  email: string
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export type SelectedLabel = 'Price low to high' | 'Price high to low' | 'Name A-Z' | 'Name Z-A'

export interface CardItemProp {
  id: number
  image: string
  collectionName: string
  owner: string
}

export interface User {
  id: string
  country: string
  url: string
  email: string
  gender: string
  name: string
  phoneNumber: string
  address: string
  city: string
  zipCode: string
  introduceYourself: string
  state: string
  avatar: string
  wallet: string
}

export interface AuthState {
  user: User
  success: boolean
  loading: boolean
  error: string | null
  created: boolean
}

export interface UserDB {
  avatar: string
  country_region: string
  custom_url: string
  email: string
  gender: string
  id: string
  introduce_yourseft: string
  name: string
  phone_number: string
  state: string
  street_address: string
  town_city: string
  wallet_eth: string
  zip_code: string
}

interface SelectItemProp {
  name: string
  value: string
}

export interface Collection {
  id: number
  created_at: string
  updated_at: string
  user_id: number
  category_name: string
  price: number | null
  name: string
  url: string
  starting_date: Date | null
  expiration_date: Date | null
  description: string
  is_explicit_and_sensitive: any
  logo_img_url: File | null
  feature_img_url: File | null
  cover_img_url: File | null
}

export interface CollectionType {
  id: number
  createdAt: string
  updatedAt: string
  userId: number
  categoryName: string
  price: number | null
  name: string
  url: string
  startingDate: Date | null
  expirationDate: Date | null
  description: string
  isExplicitAndSensitive: any
  logoImgUrl: File | null
  featureImgUrl: File | null
  coverImgUrl: File | null
}

export interface CollectionState {
  allItems: CollectionType[]
  item: AnyObject
  isLoading: boolean
  isError: boolean
  isMenu: boolean
  errorMessage: string | null
  isSuccess: boolean
  collectionQuery: AnyObject
}

interface UserData {
  id: number
  name: string
  avatar: string
  email: string
  gender: string
  phoneNumber: string
  customUrl: string
  streetAddress: string
  countryRegion: string
  state: string
  townCity: string
  zipCode: string
  introduceYourseft: string
  walletEth: string
  confirmGoogle: string
  emailVerified_at: string
  verifyToken: string
  createdAt: string
  updatedAt: string
}

interface UserPaginationLink {
  url: string
  label: string
  active: boolean
}

export interface AnyObject {
  [key: string]: any
}

export interface UserState {
  isLoading: boolean
  isLoadingBtn: boolean
  userDetail: User | null
  isSuccess: boolean
  userList: AnyObject
  isError: boolean
  isCreated: boolean
  message: string
  userQuery: AnyObject
  userNameDetails: string
}

export interface NFTState {
  trendingNfts: any
  success: boolean
  error: null | string
  loading: boolean
  nftDetail: any
  nfts: any
  query: AnyObject
}

export interface ContactForm {
  name: string
  email: string
  phone: string | null
  category: string
  title: string
  message: string
  agreeTerms: boolean
}

export interface CartType {
  id: number
  nftId: number
  nfts: Nft
  quantity: number
}

export interface CartDB {
  id: number
  nft_id: number
  nfts: NftDB
  quantity: number
}

export interface checkoutDB {
  cart_ids: number[]
  firstname: string
  lastname: string
  company_name: string
  country_region: string
  state: string
  street_address: string
  town_city: string
  zip_code: string | number
  phone: number | null
  email: string
  note: string
}

export interface checkoutType {
  cartIds: number[]
  firstName: string
  lastName: string
  companyName: string
  countryRegion: string
  state: string
  streetAddress: string
  townCity: string
  zipCode: string | number
  phone: number | null
  email: string
  note: string
}

export interface checkoutForm {
  cartIds: number[]
  firstName: string
  lastName: string
  companyName: string
  countryRegion: string
  streetAddress: string
  townCity: string
  state: string
  zipCode: string | number
  phone: number | null
  emailAddress: string
  note: string
}
