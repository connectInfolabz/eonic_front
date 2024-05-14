function Features() {
  return (
    <>
      <p
        className="container-fluid mb-0 p-5 text-justify"
        style={{ fontFamily: "sans-serif", fontWeight: "500" }}
      >
        "Eonic's" is a leading hardware shop that operates exclusively through
        its comprehensive website, catering to the needs of DIY enthusiasts,
        homeowners, contractors, and businesses alike. This innovative online
        platform offers a vast array of hardware products, ranging from power
        tools and electrical supplies to plumbing fixtures and building
        materials. The company prioritizes customer satisfaction and strives to
        ensure timely delivery of orders, with efficient logistics and reliable
        shipping partners. Additionally, customers can track their orders in
        real-time through the website, providing peace of mind and transparency
        throughout the shipping process.
        <span>
          "Eonic's" commitment to excellence extends beyond its product
          offerings and shipping services. The website also provides valuable
          resources such as how-to guides, project ideas, and expert advice to
          assist customers in their DIY endeavors and home improvement projects.
        </span>
        <br />
        <br />
        Overall, "Eonic's" stands out as a premier destination for all hardware
        needs, offering convenience, quality products, and exceptional service
        through its user-friendly website and efficient shipping solutions.
        Whether you're tackling a weekend DIY project or managing a large-scale
        construction venture, "Eonic's" is your one-stop shop for all things
        hardware-related
      </p>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3">{""}</h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2">
                {""}
              </h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3">
                {""}
              </h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3">{""}</h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
