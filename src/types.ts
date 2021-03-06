export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherObject {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherListObject {
  dt: number;
  main: WeatherMain;
  weather: WeatherObject[]
  clouds: {
    all: number;
  }
  wind: {
    speed: number;
    deg: number;
  }
  sys: {
    pod: string;
  },
  dt_txt: string;
}

export interface Weather {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherListObject[]
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    }
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
}
