#![deny(clippy::all)]

use napi::bindgen_prelude::*;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn echo_int32array(some_input_coordinates: Vec<Int32Array>) -> Vec<Int32Array> {
  let mut result: Vec<Int32Array> = Vec::new();

  for row in &some_input_coordinates {
    let new_row = row.clone();
    result.push(new_row);
  }
  result
}

#[napi]
pub fn echo_int32array_async(
  some_input_coordinates: Vec<Int32Array>,
) -> AsyncTask<AsyncEchoPathsTask> {
  let task = AsyncEchoPathsTask {
    input_coordinates: some_input_coordinates,
  };
  return AsyncTask::new(task);
}

pub struct AsyncEchoPathsTask {
  input_coordinates: Vec<Int32Array>,
}

impl Task for AsyncEchoPathsTask {
  type Output = Vec<Vec<i32>>;
  type JsValue = Vec<Int32Array>;

  fn compute(&mut self) -> Result<Self::Output> {
    let mut result: Vec<Vec<i32>> = Vec::new();
    for row in &self.input_coordinates {
      let mut new_row: Vec<i32> = Vec::new();
      for element in &row.to_vec() {
        new_row.push(element.clone());
      }
      result.push(new_row);
    }
    Ok(result)
  }

  // convert Vec<Vec<i32>> -> javascript array of arrays
  fn resolve(&mut self, _: Env, output: Self::Output) -> Result<Self::JsValue> {
    let mut result = Vec::new();
    for row in output {
      let js_row: Int32Array = Int32Array::new(row);
      // js_row[0] = 12;
      // js_row[1] = 15;
      result.push(js_row);
    }
    return Ok(result);
  }
}
