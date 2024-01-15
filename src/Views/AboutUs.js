import React from 'react';

function AboutUs() {
  return (
    <section class="bg-gradient-to-b from-red-400 to-white h-full">
      <div className="container  flex flex-col justify-center items-center">
        <img className="h-40 w-auto mt-4" src="itsfoodLogo.png" alt="logo" />
        <h1 className="font-bold text-5xl ">About Us</h1>
      </div>
      <div class="gap-16 items-center py-6 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-900 sm:text-lg">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Itsfood: Heat it, Eat it, Love it!
          </h2>
          <p class="mb-4 text-justify">
            <span className="font-medium"> Heat it, Eat it, Love it </span> –
            that's our motto. Forget endless scrolling through menus or battling
            over the phone with indecipherable orders. Itsfood brings the city's
            culinary treasures right to your fingertips, with: <br />
            <b>Our blazing-fast interface:</b> Browse curated menus, customize
            orders, and filter by dietary needs, all with effortless ease. No
            more menu battles! <br /> <b>Delivery in a flash:</b> Partnered with
            the best local couriers, we get your food hot, fresh, and fast.
            Track it in real-time and watch your hunger vanish.
            <br />
            <b> Payment paradise:</b> Cash, card, or any flavor in between – we
            make treating yourself smooth as butter.
            <br />
            <span className="font-medium">
              But Itsfood is more than just delivery.
            </span>
            <br /> We're a community of food lovers, bringing together
            passionate chefs, friendly couriers, and happy customers in one
            delicious ecosystem. We believe that every meal is an adventure, and
            we're here to guide your taste buds on a thrilling journey. So, what
            are you waiting for? Browse our curated menus, discover culinary
            hidden gems, and experience the Itsfood difference. We're not just
            delivering food, we're delivering happiness, one hot meal at a time.
            <br />
          </p>
          <span className="font-bold text-2xl mt-2 text-red-500">
            #Let the feasting begin!
          </span>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="mt-10 w-full lg:mt-10 rounded-full"
            src="sushi.jpeg"
            alt="foodImage-1"
          />
          <img class="w-full rounded-full" src="sushi.jpeg" alt="foodImage-2" />
          <img
            class="mt-4 ml-36 w-full lg:mt-10 rounded-3xl"
            src="pizza.jpeg"
            alt="foodImage-2"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
