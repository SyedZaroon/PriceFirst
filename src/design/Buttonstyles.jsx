import React from 'react'
import Button from '../components/Button/Button';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import Iconbutton from '../components/iconButton/Iconbutton';
import Radiobutton from '../components/radioButton/Radiobutton';

const Buttonstyles = () => {
  return (
    // <>
    //   <Button
    //     variant="primary"
    //     size="sm"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //     <ArrowRightIcon
    //       style={{ backgroundColor: "red", borderRadius: "0px" }}
    //     />
    //   </Button>

    //   <Button
    //     variant="primary"
    //     size="md"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="primary"
    //     size="lg"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="primary"
    //     size="xl"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="primary"
    //     size="xl"
    //     disabled={true}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <br></br>

    //   <Button
    //     variant="secondary"
    //     size="sm"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //     <ArrowRightIcon />
    //   </Button>

    //   <Button
    //     variant="secondary"
    //     size="md"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary"
    //     size="lg"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary"
    //     size="xl"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary"
    //     size="xl"
    //     disabled={true}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <br></br>

    //   <Button
    //     variant="secondary-gray"
    //     size="sm"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary-gray"
    //     size="md"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary-gray"
    //     size="lg"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary-gray"
    //     size="xl"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="secondary-gray"
    //     size="xl"
    //     disabled={true}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <br></br>

    //   <Button
    //     variant="text"
    //     size="sm"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="text"
    //     size="md"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="text"
    //     size="lg"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="text"
    //     size="xl"
    //     disabled={false}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //   </Button>

    //   <Button
    //     variant="text"
    //     size="xl"
    //     disabled={true}
    //     onClick={() => console.log("Clicked")}
    //   >
    //     Book Now
    //     <ArrowRightIcon />
    //   </Button>
    // </>

    //icons buttons

    // <>
    //   <Iconbutton size="2xs" />
    //   <Iconbutton size="xs" />
    //   <Iconbutton size="sm" />
    //   <Iconbutton size="md" />
    //   <Iconbutton size="lg" />
    //   <Iconbutton size="xl" />
    //   <Iconbutton size="2xl" disabled = {true} />
    // </>

    // Radio Buttons

    <>
      <Radiobutton size="sm" />
      <Radiobutton size="md" />
      <Radiobutton size="lg" />
      <Radiobutton size="lg" disabled={true} />
      <Radiobutton size="md" disabled={true} defaultChecked={true} name="option1" />
    </>
  );
}

export default Buttonstyles