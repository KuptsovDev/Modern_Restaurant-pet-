import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constans";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            eaque, at, quod minima labore, officia dolorem accusamus et magni
            recusandae nihil! Sapiente dicta fugiat, dolorem amet nemo delectus
            aliquid quo!
          </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio illum veritatis ratione, delectus veniam minima quos fugit vel est repellendus culpa? Accusamus minima illum nam ipsam suscipit nisi nostrum! Itaque?
        Quos quam consequatur beatae vero eius in nisi, iusto eaque quasi saepe illum, voluptatum earum architecto enim doloribus. Consequuntur voluptatibus dignissimos dolorum nam voluptate necessitatibus cumque, corrupti tempore ipsam voluptates?
        Accusantium laborum eius consectetur aliquam, quidem recusandae adipisci amet reiciendis vero tempore officiis deleniti illo at beatae nam explicabo provident quam velit doloremque dolore totam fuga dolorem. Recusandae, odio eligendi?
        Quod enim reprehenderit quo impedit pariatur perspiciatis suscipit aliquid, tempore ipsum id, vitae illum. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
