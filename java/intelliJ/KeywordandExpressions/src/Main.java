public class Main {
    public static int check(double kilometersPerHour) {
        for (int i = 0; i < 5; i++) {
            System.out.println("hey");
//            break;
        }

        return 1;
    }

    public static void main(String[] args) {
        System.out.println(check(1.5));

        SmartKitchen smKitchen = new SmartKitchen();

        smKitchen.setKitchen(true, true, true);
        smKitchen.doKitchenWork();
    }


}
