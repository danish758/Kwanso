
export interface HeaderProps {
    gender: string;
    setGender: React.Dispatch<React.SetStateAction<string>>;
    keyword: string;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
    users:UserType[];
  }

export interface UserType {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: {
      date: string;
      age: number;
    };
    registered: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    id: {
      name: string;
      value: null | string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }
  
  export interface BgImgStylesType {
    transition: string;
    borderRadius: string;
    boxShadow: string;
    position?: React.CSSProperties['position'];
    backgroundColor: string;
    color: string;
    marginBottom: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
    backgroundImage: string;
    height?: string;
    width?: string;
  }