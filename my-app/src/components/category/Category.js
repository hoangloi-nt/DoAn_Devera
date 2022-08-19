import React from 'react';
import { Button } from 'components/button';

const Category = () => {
    return (
      <div className="categories flex items-center justify-center text-sm gap-x-10">
        <Button className="category-item" kind="secondary" height={"34px"} active={true}>
          Music
        </Button>
        <Button kind="secondary" height={"34px"}>
          Art
        </Button>
        <Button kind="secondary" height={"34px"}>
          Sport
        </Button>
        <Button kind="secondary" height={"34px"}>
          Photography
        </Button>
        <Button kind="secondary" height={"34px"}>
          Virtual Reality
        </Button>
        <Button kind="secondary" height={"34px"}>
          Video
        </Button>
      </div>
    );
}

export default Category;