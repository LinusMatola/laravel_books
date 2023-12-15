// resources/js/Pages/Edit.jsx

import {React, useEffect} from 'react';
import { Inertia } from "@inertiajs/inertia";

const Edit = ({author}) => {

  return (
    <div>
      <h1>Edit Author</h1>
      <p>Name: {author.name}</p>
      <p>Email: {author.email}</p>
    </div>
  );
};

export default Edit;
