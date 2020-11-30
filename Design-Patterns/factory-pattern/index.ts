/* 
    工厂模式
1. 优点：拓展性高
2. 缺点：类成倍增加
*/

interface Shape {
    draw: () => void;
}

class Rectangle implements Shape {
    draw() {
        console.log('Rectangle')
    }
}
class Square implements Shape {
    draw() {
        console.log('Square')
    }
}
class Circle implements Shape {
    draw() {
        console.log('Circle')
    }
}

// 工厂，基于给定信息生成实体类对象
class ShapeFactory {
    getShape(shape: string) {
        if (shape === 'CIRCLE') {
            return new Circle();
        } else if (shape === 'RECTANGLE') {
            return new Rectangle();
        } else if (shape === 'SQUARE') {
            return new Square();
        }
        return null;
    }
}

// 使用工厂 得到类对象
class FactoryPatternDemo{
    constructor (){
        const shapeFactory = new ShapeFactory();
        const c = shapeFactory.getShape('CIRCLE');
        c.draw()
        const s = shapeFactory.getShape('SQUARE');
        s.draw()
        const r = shapeFactory.getShape('RECTANGLE');
        r.draw()
    }
}
new FactoryPatternDemo()