
  import React from 'react';
  import Image from 'next/image';
  import { Welcome } from '../../../../components/users/welcome';
  import { History } from '../../../../components/users/history';
  import { Operation } from '../../../../components/users/operation';
  import { Blogs } from '../../../../components/users/blogs';


  function page() {
    return (
      <div className=''>
       <Welcome/>
       <History/>
       <Operation/>
       <Blogs/>
      </div>
    );
  }

  export default page;
