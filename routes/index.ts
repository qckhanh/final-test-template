import {Express, Response, Request, NextFunction} from 'express';
import userRoute from "./user.route";
/**
 * Apply Routes
 *
 * This function registers all API routes with the Express application.
 * Routes are organized by feature domain and follow a consistent API versioning pattern.
 *
 * @param {Express} app - The Express application instance
 */
const applyRoutes = (app: Express) => {
    app.use('/api/v1/user', userRoute);
    // Add other routes here






    //Invalid Route
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({
            error: 'Not Found',
            message: `Route ${req.method} ${req.originalUrl} does not exist`,
        });
    });
};

export default applyRoutes;
