import { useState } from "react";

// Accordion Component
function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div
        className="panel"
        style={{
          maxHeight: isActive ? "100px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

// Website Component
export default function Website() {
  return (
    <>
      <div id="h1s">
        <h1>Your Questions</h1>
      </div>
      <div>
        <Accordion title="What are you making?" content="A mobile app in react native" />
        <Accordion title="Why are you making it?" content="Cuz i want to" />
        <Accordion title="For how long have u had this idea?" content="A couple weeks" />
        <Accordion title="What does it exactly do?" content="Tracks stuff" />
      </div>
      <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id augue convallis, accumsan nunc ac, fermentum odio. Mauris rutrum placerat est, et hendrerit velit viverra id. Maecenas arcu nisi, dapibus ac felis in, porttitor auctor odio. Fusce pellentesque turpis id libero sodales, quis elementum nibh pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu arcu risus. Vestibulum sollicitudin condimentum leo eleifend porta. Nulla facilisi. Etiam sodales leo nec magna dapibus feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi maximus convallis sem vel pulvinar. Donec finibus dolor at turpis suscipit porta. Nunc sed mollis magna, nec finibus metus. Ut eget malesuada tellus. Nam id feugiat odio, id scelerisque dui. Quisque accumsan neque quis libero accumsan, at malesuada ante dignissim. Fusce nec accumsan purus. Phasellus finibus erat ipsum, placerat consectetur velit blandit eget. Nunc mi ligula, aliquet sit amet viverra vitae, ullamcorper ac quam. Nulla rutrum, turpis ut facilisis posuere, lorem nulla vestibulum leo, a vestibulum metus turpis vitae risus. Phasellus quis libero et nulla euismod luctus id id nulla. Nullam porttitor quam non orci suscipit rutrum. Quisque eu ullamcorper sapien, at commodo justo. Nunc ultrices interdum sapien. Fusce malesuada vestibulum laoreet. Nulla nisl lacus, congue elementum porttitor at, sollicitudin at magna. Phasellus pulvinar odio ut dolor hendrerit fringilla. In sed hendrerit arcu. Mauris bibendum nisl ut efficitur euismod. Sed mollis a elit sed suscipit. Ut eu ultricies odio. Duis molestie interdum ligula id vestibulum. Morbi scelerisque magna quis justo pharetra sagittis et ac metus. Duis id ullamcorper enim. Nullam tincidunt enim quis nunc laoreet tincidunt. Suspendisse potenti. Suspendisse sagittis nisl sit amet eros sodales, quis scelerisque nunc rhoncus. Mauris dapibus id orci ut varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ante metus, viverra quis lorem sed, rutrum lacinia quam. Curabitur non orci id ligula pellentesque maximus. Suspendisse sed odio nisl. Cras pharetra consectetur tortor, et elementum metus eleifend at. Pellentesque aliquet non metus eu faucibus. Ut dui leo, efficitur consequat auctor consectetur, egestas id e<a id="skibidia" href="secret.html">x</a>. Aliquam ultrices urna orci, gravida cursus nibh laoreet in. Ut sit amet maximus ipsum, sed dictum massa. Donec id congue velit. Curabitur dapibus lacus vitae sapien volutpat suscipit. Cras gravida, justo vitae dapibus tincidunt, sapien urna mattis magna, in aliquet odio massa a quam. Phasellus consectetur laoreet nulla, ut varius orci suscipit quis. Cras sit amet imperdiet mi, ut auctor quam. Phasellus sed arcu velit. Maecenas placerat tellus ultricies risus lacinia gravida. Suspendisse lacus dui, euismod id nisi nec, rutrum commodo est. Cras tincidunt sagittis augue, vitae suscipit nibh imperdiet et. Nunc id massa eros. Etiam ut rhoncus lectus. Nunc nec odio ipsum. Aliquam a blandit tortor. Maecenas dapibus volutpat nunc et consectetur. Aliquam in tellus diam. Fusce quis nunc sed lorem tincidunt varius vel viverra odio. Nam auctor, ex vitae dignissim faucibus, urna nulla ullamcorper nisi, in porttitor libero felis non nunc. Mauris vitae felis vitae leo congue blandit. Fusce venenatis ipsum eget tempus luctus. Nullam ullamcorper enim tellus, ut maximus lorem faucibus consectetur. Etiam ornare aliquet molestie. Integer volutpat enim rhoncus porttitor consequat. Praesent in iaculis erat. Quisque aliquet eget magna eget commodo. Pellentesque maximus interdum nulla sit amet efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce commodo, justo eu commodo convallis, arcu turpis faucibus diam, in ornare nisl ex sit amet orci. Duis sed tempor mi. Donec dapibus lacus quis ex cursus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris eu est convallis tincidunt. Phasellus mollis ex mattis, aliquet nisl ut, rutrum ante. Integer eu ipsum eu dui sodales iaculis. Etiam ac consequat eros, eu interdum metus. Donec posuere, urna sed lacinia tempus, ante enim aliquam dolor, rhoncus vehicula nisl dolor id mauris. Quisque pretium placerat nulla, et tempus tortor facilisis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat rhoncus lacinia. Nunc tortor felis, dignissim at metus et, eleifend sagittis quam. Suspendisse lacinia vitae ante in pellentesque. Phasellus posuere lorem erat, at convallis est commodo vitae. Quisque quis orci in velit laoreet bibendum. Vestibulum sodales, massa vitae suscipit tristique, est erat malesuada eros, dignissim dapibus lectus enim sit amet nulla. Fusce gravida lorem ac ligula dignissim blandit id id neque. Maecenas euismod molestie neque in scelerisque. Fusce at finibus mi.</p></div>
    </>
  );
}