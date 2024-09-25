import express from 'express';
import { addBook, deleteBook, editBook, getAllBooks } from '../controllers/booksController.js';
const router = express.Router();
router.route('/').post(addBook);
router.route('/:userId').get(getAllBooks);
router.route('/:bookId').put(editBook);
router.route('/:bookId').delete(deleteBook);
export default router;
