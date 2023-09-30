import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
    },
  ];

  findAll() {
    return this.products;
  }

  findById(id: string) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  create(productData) {
    // Add logic here to create a new product and add it to the array
    // You can generate a unique ID for the new product
    const newProduct = {
      id: String(this.products.length + 1),
      ...productData,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, productData) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products[productIndex] = { id, ...productData };
    return this.products[productIndex];
  }

  delete(id: string) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const deletedProduct = this.products.splice(productIndex, 1)[0];
    return deletedProduct;
  }
}
