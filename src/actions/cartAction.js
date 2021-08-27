import { db } from "../firebase/firebaseConfig";

export const cartAction = (quantity, product) => {
  return async (dispatch) => {

    const newProduct = {
      quantity,
      product,
    }

    await db.collection(`/cart`).add(newProduct);
    // const training = await loadTrainingCard();
    // dispatch(setTraining(training));
    // dispatch(startLoadingAllTrainings());
  }
}