
class A {
    void showA() {
        System.out.println("print A");
    }
}
class B extends A {
    void showB() {
        System.out.println("print B"); 
    }

public static void main(String[] args) {
    B obj2 = new B();
    obj2.showB();
    obj2.showA(); // This will print "print B"
}
}

    
