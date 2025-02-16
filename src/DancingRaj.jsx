import { Rive } from '@rive-app/react-canvas';

const MyRiveAnimation = () => {
    return (
      <Rive
        src ="public/dancingRaj.riv"  // Update with your actual .riv file path
        stateMachines="StateMachineName"   // Optional: Specify the state machine to control animations
        autoplay={true}                    // Start playing automatically
      />
    );
  };
  
  export default MyRiveAnimation;
  