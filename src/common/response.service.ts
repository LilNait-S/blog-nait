export function successResponse(data: any, message: string) {
  return {
    statusCode: 200,
    success: true,
    message,
    data,
  };
}

export function createdResponse(data: any, message: string) {
  return {
    statusCode: 201,
    success: true,
    message,
    data,
  };
}

export function errorResponse(data: any, message: string) {
  return {
    statusCode: 400,
    success: false,
    message,
    data,
  };
}

export function notFoundResponse(data: any, message: string) {
  return {
    statusCode: 404,
    success: false,
    message,
    data,
  };
}

export function unauthorizedResponse(data: any, message: string) {
  return {
    statusCode: 401,
    success: false,
    message,
    data,
  };
}
