public class SmartKitchen {
    private CoffeeMaker brewMaster;
    private DishWasher dishWasher;
    private Refrigerator refrigerator;

    public SmartKitchen() {
        this.brewMaster = new CoffeeMaker();
        this.dishWasher = new DishWasher();
        this.refrigerator = new Refrigerator();
    }

    public SmartKitchen(CoffeeMaker brewMaster, DishWasher dishWasher, Refrigerator refrigerator) {
        this.brewMaster = brewMaster;
        this.dishWasher = dishWasher;
        this.refrigerator = refrigerator;
    }

    public void addWater()  {
        brewMaster.brewCoffee();
    }

    public void pourMilk() {
        refrigerator.orderFood();
    }

    public void loadDishWasher() {
        dishWasher.doDishes();
    }

    public void setKitchen(boolean coffeeFlag, boolean fridgeFlag, boolean dishesFlag) {
        this.brewMaster.setHasWorkToDo(coffeeFlag);
        this.dishWasher.setHasWorkToDo(fridgeFlag);
        this.refrigerator.setHasWorkToDo(dishesFlag);
    }

    public void doKitchenWork() {
        this.brewMaster.brewCoffee();
        this.refrigerator.orderFood();
        this.dishWasher.doDishes();
    }
}

abstract class Appliance {
    protected boolean hasWorkToDo = false;

    public void setHasWorkToDo(boolean hasWorkToDo) {
        this.hasWorkToDo = hasWorkToDo;
    }

    public void doWork(String message) {
        if (this.hasWorkToDo) {
            System.out.println(message);
            this.hasWorkToDo = false;
        } else {
            this.hasWorkToDo = true;
        }
    }
}

class CoffeeMaker extends Appliance {

    public CoffeeMaker() {
    }

    public void brewCoffee() {
        doWork("Brewing Coffee");
    }
}

class DishWasher extends Appliance {

    public DishWasher() {
    }

    public void doDishes() {
        doWork("Washing Dishes");
    }
}

class Refrigerator extends Appliance {

    public Refrigerator() {
    }

    public void orderFood() {
        doWork("Ordering food");
    }
}