export interface Product {
	_id?: string;
	title: string;
	stock: number;
	rating: number;
	price: number;
	category?: string;
	brand?: string;
	thumbnail?: string;
	description?: string;
}

export interface Order {
	_id?: string;
	title?: string;
	total: number;
	totalQuantity: number;
	userId: string;
	createdAt?: string;
	discountedTotal?: number;
}

export interface DashboardData {
	_id?: string;
	day_of_week: string;
	sales_channel: "online" | "offline";
	amount_spent: number;
	createdAt?: string;
	service_type?: string;
	is_loyal?: number;
	is_new?: number;
	is_unique?: number;
	satisfaction_score?: number;
}

export interface ProductContextType {
	products: Product[] | null;
	orders: Order[] | null;
	dashboard: DashboardData[] | null;
	loading: boolean;
	error: string | null;
	fetchProducts: () => Promise<void>;
	fetchOrders: () => Promise<void>;
	fetchDashboard: () => Promise<void>;
	refreshAll: () => Promise<void>;
}
