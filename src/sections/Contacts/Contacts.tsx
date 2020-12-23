import React from 'react';
import { FaGithub } from 'react-icons/fa/';

import './Contacts.css';

export default function Contacts() {
  return (
    <div className="contacts-root">
      <h1 className="contacts-title">FIND ME IN</h1>
      <div className="contacts-container">
        <Item
          accountUrl={'https://github.com/cindmichelle'}
          icon=""
          slug="@cindmichelle"
        />
      </div>
    </div>
  );
}

type ItemProps = {
  icon: string;
  accountUrl: string;
  slug?: string;
};

function Item({ accountUrl, icon, slug }: ItemProps) {
  return (
    <div className="root-item-cont">
      <div className="outer-item-cont">
        <div className="inner-item-cont">
          <FaGithub className="icon" color={'#eddfd5'} />
        </div>
      </div>
      <p className="item-label">{slug}</p>
    </div>
  );
}
