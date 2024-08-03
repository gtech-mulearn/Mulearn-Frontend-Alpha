interface CardProps {
  img: string;
  full_name: string;
  email: string;
  karma: number;
  rank: number;
  org: string;
  district_name: string;
  is_public: boolean;
  muid: string;
}

interface requestparams {
  pageIndex?: number | 1;
  perPage?: number | 15;
  search?: string;
}

interface paginationProps {
  count: number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number | null;
  per_page: number;
  totalPage: number;
}

interface topthreeProps {
  full_name: string;
  karma: number;
  muid: string;
  org: string;
  profile_pic: string;
  district_name: string;
  is_public: boolean;
}
