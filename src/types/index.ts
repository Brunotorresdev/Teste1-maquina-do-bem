// tipagem dos itens do array da API

export interface Card {
  level: string;
  subscribe_data?: {
    title: string;
    position: {
      available: number;
    };
    address: {
      state: string;
      city: string;
    };
  };
  material_data: {
    title: string;
    position: {
      available: number;
    };
  };
  action_data: {
    title: string;
  };
}
