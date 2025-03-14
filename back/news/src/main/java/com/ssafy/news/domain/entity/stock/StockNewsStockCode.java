package com.ssafy.news.domain.entity.stock;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StockNewsStockCode {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stock_news_stock_code_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stock_news_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private StockNews stockNews;

    private String stockCode;

    public static StockNewsStockCode of(final StockNews stockNews, final String stockCode) {
        StockNewsStockCode stockNewsStockCode = new StockNewsStockCode();
        stockNewsStockCode.stockNews = stockNews;
        stockNewsStockCode.stockCode = stockCode;
        return stockNewsStockCode;
    }
}
