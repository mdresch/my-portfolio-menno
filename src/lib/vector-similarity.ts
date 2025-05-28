/**
 * Calculate the dot product of two vectors
 */
export function dotProduct(vecA: number[], vecB: number[]): number {
  let product = 0;
  for (let i = 0; i < vecA.length; i++) {
    product += vecA[i] * vecB[i];
  }
  return product;
}

/**
 * Calculate the magnitude (length) of a vector
 */
export function magnitude(vec: number[]): number {
  return Math.sqrt(dotProduct(vec, vec));
}

/**
 * Calculate cosine similarity between two vectors
 * Cosine similarity = dot(A, B) / (|A| * |B|)
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error('Vectors must have the same dimensions');
  }
  
  const magA = magnitude(vecA);
  const magB = magnitude(vecB);
  
  if (magA === 0 || magB === 0) {
    return 0; // Handle zero vectors
  }
  
  return dotProduct(vecA, vecB) / (magA * magB);
}

/**
 * Calculate cosine distance between two vectors
 * Cosine distance = 1 - cosine similarity
 */
export function cosineDistance(vecA: number[], vecB: number[]): number {
  if (!vecA.length || !vecB.length) {
    return 1; // Maximum distance if any vector is empty
  }
  return 1 - cosineSimilarity(vecA, vecB);
}

/**
 * Calculate euclidean distance between two vectors
 */
export function euclideanDistance(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error('Vectors must have the same dimensions');
  }
  
  let sum = 0;
  for (let i = 0; i < vecA.length; i++) {
    sum += Math.pow(vecA[i] - vecB[i], 2);
  }
  
  return Math.sqrt(sum);
}
