const CustomerReview = () => {
  return (
    <div style={{backgroundImage: "url(/review-card-bg.png)"}} class="bg-cover  text-white p-5 rounded-lg w-64 relative">
      <div class="flex items-center mb-3">
        <span>5.0</span>
        <span class="text-yellow-400 ml-1">★★★★★</span>
      </div>

      <p class="text-sm mb-4">
        Absolutely thrilled with our new solar panel system! The installation
        team was professional, and the entire process was seamless. We've
        already noticed a significant drop in our energy bills. Highly recommend
        for anyone looking to go green and save money.
      </p>

      <div class="flex items-center">
        <img src=" " alt="User Image" class="w-10 h-10 rounded-full mr-3" />
        <div>
          <div class="font-bold">Darin Nguyen</div>
          <div class="text-gray-300 text-xs">@staking</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
