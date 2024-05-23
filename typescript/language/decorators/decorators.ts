/*
    ** DECORATORS ARE EXECUTED WHEN WE DECLARE THE BLUEPRINT NOT THE INSTANCE **

    Because the Prototype System allows you to add new method after a blueprint 
    has been declared

    Parameters: 
        - target: any, Blueprint
        - key: string, name of the method, property or getter
        - descriptor
*/

class Boat {
  color = "red";

  @logError
  detail(): void {
    throw new Error();
    console.log(`The color of this boat is ${this.color}`);
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  try {
    method();
  } catch (error) {
    console.log(`Opps there was an error: `, error);
  }
}

// DECORATOR FACTORY -> leverages closure to allow parameters
@classDecorator 
class HomoSapiens {
  heightInCM = 182;

  @logFactory("Oops I did it again! O yeh yeh yeh yeh!")
  talk(@parameterDecorator durationInSeconds: number) {
    throw new Error();
  }
}

function logFactory(message: string) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const method = desc.value;

    try {
      method();
    } catch (error) {
      console.log(message);
    }
  };
}

// PARAMETER DECORATOR

function parameterDecorator(target: any, key: string, index: number) {
  console.log("target: ", target);
  console.log("key: ", key);
  console.log("index: ", index);
}

// CLASS DECORATOR
function classDecorator(constructor: Function) {
  console.log("constructor: ", constructor);
}
