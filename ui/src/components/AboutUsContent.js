import "./AboutUsContent.css";
const AboutUsContent = ({ showAboutUs }) => {
  return (
    <div
      class={
        showAboutUs
          ? "hidden about-us-content"
          : "about-us-content about-us-added"
      }
    >
      <div>
        <p>About Us:</p>
        <p class="about-us-information">
          Gülbahçe is a fast food joint in Urla/İzmir. It opened for business in
          2023
        </p>
      </div>
    </div>
  );
};

export default AboutUsContent;
