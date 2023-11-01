
class AppRoutes{

  /**
   * The AppRoutes class defines the `getInstance` method that lets clients access
   * the unique AppRoutes instance.
   */
  private static instance: AppRoutes;
  

  /**
   * The static method that controls the access to the singleton instance.
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): AppRoutes
 {
    if (!this.instance) {
      return (AppRoutes.instance = new AppRoutes());
    }
    return this.instance;
  }

  getHomePath(): string {
    return '/';
  }

  getContactUsPath(): string {
    return '/contact-us';
  }

  getWhoWeArePath(): string {
    return '/who-we-are';
  }

 
  }



export const appRoutesObj = AppRoutes.getInstance();
