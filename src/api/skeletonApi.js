import {results} from './fetchApi';

class skeletonApi {
  static getAllSkeletons() {
    return results(`${process.env.API_HOST}/api/Skeleton`, 'GET', 'Skeleton').then(skeletons => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], skeletons));
      });
    });
  }

  static getSkeletonById(skeletonId) {
    return results(`${process.env.API_HOST}/api/Skeleton/${skeletonId}`, 'GET', 'Skeleton')
      .then(skeleton => {
        return new Promise((resolve, reject) => {
          resolve(skeleton);
        });
      });
  }

  static saveSkeleton(skeleton) {
    skeleton = Object.assign({}, skeleton); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minskeletonNameLength = 2;
      if (skeleton.skeletonId) {
        results(`${process.env.API_HOST}/api/Skeleton/${skeleton.skeletonId}`, 'PUT', 'Skeleton', skeleton)
          .then((skeleton) => {
            resolve(skeleton);
          });
      } else {
        results(`${process.env.API_HOST}/api/Skeleton`, 'POST', 'Skeleton', skeleton).then((skeleton) => {
          resolve(skeleton);
        });
      }
    });
  }

  static deleteSkeleton(skeleton) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/Skeleton/${skeleton.skeletonId}`, 'DELETE', 'State', skeleton);
      resolve();
    });
  }
}

export default skeletonApi;
