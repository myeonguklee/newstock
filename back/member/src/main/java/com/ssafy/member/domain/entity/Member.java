package com.ssafy.member.domain.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "members")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name = "member_name", nullable = false)
    private String memberName;

    @Column(name = "member_provider_email", nullable = false)
    private String providerEmail;

    @Enumerated(EnumType.STRING)
    @Column(name = "member_provider", nullable = false)
    private Provider provider;

    @Column(name = "member_profile_image_url")
    private String profileImageUrl;

    @Column(name = "member_point")
    private Long point;

    @Column(name = "member_holding_change_rate")
    private Double holdingChangeRate;

    @Column(name = "member_transaction_change_rate")
    private Double transactionChangeRate;

    public Member(final String memberName, final String provider, final String providerEmail, final String profileImageUrl) {
        this.memberName = memberName;
        this.providerEmail = providerEmail;
        this.provider = Provider.valueOf(provider.toUpperCase());
        this.profileImageUrl = profileImageUrl;
        this.point = 1_000_000L;
    }

    // update name
    public Member updateMemberName(String memberName) {
        this.memberName = memberName;
        return this;
    }

    // update point
    public void updateMemberPoint(Long point) {
        this.point = point;
    }

    // increase point
    public void increaseMemberPoint(Long point){
        this.point += point;
    }

    // update changeRate
    public void updateMemberChangeRate(Double holdingChangeRate, Double transactionChangeRate) {
        this.holdingChangeRate = holdingChangeRate;
        this.transactionChangeRate = transactionChangeRate;
    }
}


