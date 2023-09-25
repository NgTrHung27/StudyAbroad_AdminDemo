
  import React from 'react';
  import Image from 'next/image';
  import { Welcome } from '../../../../components/users/welcome';
  import { History } from '../../../../components/users/history';

  function page() {
    return (
      <div className='absolute' >
       <Welcome/>
       <History/>
      </div>
    );
  }

  export default page;
