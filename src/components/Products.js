import React, { useState} from 'react';
import { Container, Table, Button, Modal, Form, Pagination, Dropdown } from 'react-bootstrap';
import Navbar from './Navbar';
import './Welcome.css';
const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 3, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 4, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 5, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 6, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 7, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 8, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 9, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 10, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 11, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 12, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 13, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 14, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 15, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 16, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 17, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 18, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 19, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 20, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 21, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    { id: 22, name: 'Product 1', category: 'Category A', price: 50.00, stockQuantity: 100 },
    { id: 23, name: 'Product 2', category: 'Category B', price: 30.00, stockQuantity: 75 },
    
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stockQuantity: 0 });

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });
  };

  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedProduct({});
  };

  const handleShowEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const addProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    handleCloseAddModal();
  };

  const editProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? { ...selectedProduct } : product
    );
    setProducts(updatedProducts);
    handleCloseEditModal();
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };
  const handleRecordsPerPageChange = (selectedRecordsPerPage) => {
    setRecordsPerPage(selectedRecordsPerPage);
    setCurrentPage(1); // Reset to the first page when changing records per page
  };
  const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};


  return (
    <div>
        <Navbar/>

      <Container className="mt-4">
        <h2>Products</h2>

        <Button variant="primary" onClick={handleShowAddModal}>
          Add Product
        </Button>
        
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <Button variant="info" onClick={() => handleShowEditModal(product)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Dropdown className="ml-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {recordsPerPage}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleRecordsPerPageChange(5)}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => handleRecordsPerPageChange(10)}>10</Dropdown.Item>
          <Dropdown.Item onClick={() => handleRecordsPerPageChange(15)}>15</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

        {/* Pagination */}
        <Pagination className="justify-content-end">
        {Array.from({ length: Math.ceil(products.length / recordsPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      </Container>

      {/* Add Product Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductStock">
              <Form.Label>Stock Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stock quantity"
                value={newProduct.stockQuantity}
                onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value, 10) || 0 })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Product Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEditProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={selectedProduct.name}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product category"
                value={selectedProduct.category}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                value={selectedProduct.price}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, price: parseFloat(e.target.value) || 0 })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditProductStock">
              <Form.Label>Stock Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stock quantity"
                value={selectedProduct.stockQuantity}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, stockQuantity: parseInt(e.target.value, 10) || 0 })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={editProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
