import { Injectable } from '@angular/core';

@Injectable()
export class StateDetailsService {
  states: [
    {id: 'IN-AN',
     name: 'Andhra Pradesh'
    },
    {id: 'IN-AP',
      name: 'Arunachal Pradesh'
    },
    {id: 'IN-AR',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-AS',
      name: 'Assam'
    },
    {id: 'IN-BR',
      name: 'Bihar'
    },
    {id: 'IN-CH',
      name: 'Chatis'
    },
    {id: 'IN-CT',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-DD',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-DL',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-DN',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-GA',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-GJ',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-HP',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-HR',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-JH',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-JK',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-KA',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-KL',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-LD',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-MH',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-ML',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-MN',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-MP',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-MZ',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-NL',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-OR',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-PB',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-PY',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-RJ',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-SK',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-TG',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-TN',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-TR',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-UP',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-UT',
      name: 'Andhra Pradesh'
    },
    {id: 'IN-WB',
      name: 'Andhra Pradesh'
    },

  ]
  constructor() { }

  getAllStates() {
    return this.states;
  }

}
