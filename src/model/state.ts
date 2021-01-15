import {City} from './city';

export interface State {
  name: string | undefined;
  totalPopulation: number | undefined;
  totalFee: number | undefined;
  cities: City[] | undefined;
}
